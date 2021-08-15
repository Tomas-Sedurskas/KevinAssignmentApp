import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axios } from '../../utils/axios';
import data from '../../utils/apiResponseDummy.json';
import likedData from '../../utils/dummyLiked.json';
import { fileURLToPath } from "url";

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
        likedPhotos: [] as  any,
        loading: false,
        updatePhotos: true,
        updateLikedPhotos: true,
        renderModal: false
    },
    reducers: {
        likePhoto: (state, action: PayloadAction<any>) => {
            let likedLocalStorage: string = localStorage.getItem('kevin-unsplash-liked-images') || '[]';
            let parsedStorage: Array<string> = JSON.parse(likedLocalStorage);

            parsedStorage.push(action.payload);
            state.likedPhotos = parsedStorage;
            localStorage.setItem('kevin-unsplash-liked-images', JSON.stringify(parsedStorage));
            
            state.updatePhotos = true;
        },
        dislikePhoto: (state, action: PayloadAction<any>) => {
            
            let likedLocalStorage: string = localStorage.getItem('kevin-unsplash-liked-images') || '[]';
            let parsedStorage: Array<string> = JSON.parse(likedLocalStorage);
            console.log(parsedStorage)
            var filteredStorage = parsedStorage.filter(id => id !== action.payload);
            console.log(filteredStorage)
            state.likedPhotos = filteredStorage;
            localStorage.setItem('kevin-unsplash-liked-images', JSON.stringify(filteredStorage));
            state.updatePhotos = true;
        }
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

export const { likePhoto, dislikePhoto } = photosSlice.actions;

export default photosSlice.reducer;