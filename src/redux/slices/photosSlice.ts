import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axios } from '../../utils/axios';
import data from '../../utils/apiResponseDummy.json';
import likedData from '../../utils/dummyLiked.json';

export const getPagePhotosAsync = createAsyncThunk('photos/get-page',
    async (page: number) => {
        const response = await axios.get(`https://api.unsplash.com/collections/2708059/photos?page=${page}&per_page=30`)
            .then((res) => {
                console.log(res)
                return res.data
            })
            .catch(error => {
                throw error
            });
        return response;
    }
);

export const getLikedPhotosAsync = createAsyncThunk('photos/get-liked',
    async (id: string) => {
        const response = await axios.get(`https://api.unsplash.com/photos/${id}`)
            .then((res) => {
                console.log(res)
                return res.data
            })
            .catch(error => {
                throw error
            });
        return response;
    }
);

const photosSlice = createSlice({
    name: 'photos',
    initialState: {
        photos: data  as  any,
        likedPhotos: likedData  as  any,
        loading: false,
        updatePhotos: true,
        updateLikedPhotos: true,
        renderModal: false
    },
    reducers: {
        likePhoto: (state) => {
            state.updatePhotos = true;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getPagePhotosAsync.pending, (state) => {
            state.loading = true;
        })
        .addCase(getPagePhotosAsync.fulfilled, (state, action: PayloadAction<any>) => {
            state.photos.push(action.payload);
            state.loading = false;
        })
        .addCase(getPagePhotosAsync.rejected, (state) => {
            state.loading = false;
        })
        .addCase(getLikedPhotosAsync.pending, (state) => {
            state.loading = true;
            state.updateLikedPhotos = true;
        })
        .addCase(getLikedPhotosAsync.fulfilled, (state, action: PayloadAction<any>) => {
            state.likedPhotos.push(action.payload);
            state.loading = false;
            state.updateLikedPhotos = false;
        })
        .addCase(getLikedPhotosAsync.rejected, (state) => {
            state.loading = false;
            state.updateLikedPhotos = false;
        })
    }
});

export default photosSlice.reducer;