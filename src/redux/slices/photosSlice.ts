import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axios } from '../../utils/axios';

interface Photo {
    id: string,
    description: string,
    alt_description: string,
    user: {
        first_name: string,
        last_name: string,
        profile_image: {
                small: string
            }
    }
    urls: {
        regular: string
    }
}

export const getPagePhotosAsync = createAsyncThunk('photos/get-page',
    async (page: number) => {
        const response = await axios.get(`https://api.unsplash.com/collections/4533967/photos?page=${page}&per_page=30`)
            .then((res) => {
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
                return res.data
            })
            .catch(error => {
                throw error
            });
        return response;
    }
);

export const getModalPhotoAsync = createAsyncThunk('photos/get-modal',
    async (id: string) => {
        const response = await axios.get(`https://api.unsplash.com/photos/${id}`)
            .then((res) => {
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
        photos: [] as any,
        likedPhotos: [] as any,
        modalPhoto: <Photo>{},
        likedIdArray: JSON.parse(localStorage.getItem('kevin-unsplash-liked-images') || '[]'),
        loading: false,
        updateLikedPhotos: true,
        error: ''
    },
    reducers: {
        likePhoto: (state, action: PayloadAction<string>) => {
            let likedLocalStorage: string = localStorage.getItem('kevin-unsplash-liked-images') || '[]';
            let parsedStorage: Array<string> = JSON.parse(likedLocalStorage);
            parsedStorage.push(action.payload);  
            localStorage.setItem('kevin-unsplash-liked-images', JSON.stringify(parsedStorage));
            state.likedIdArray.push(action.payload)
            state.updateLikedPhotos = true;
        },
        dislikePhoto: (state, action: PayloadAction<string>) => {
            let likedLocalStorage: string = localStorage.getItem('kevin-unsplash-liked-images') || '[]';
            let parsedStorage: Array<string> = JSON.parse(likedLocalStorage);
            var filteredStorage = parsedStorage.filter(id => id !== action.payload);
            state.likedIdArray = filteredStorage;
            state.likedPhotos = state.likedPhotos.filter((photo:any) => photo.id !== action.payload)
            localStorage.setItem('kevin-unsplash-liked-images', JSON.stringify(filteredStorage));
            state.updateLikedPhotos = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPagePhotosAsync.pending, (state) => {
            state.loading = true;
        })
        .addCase(getPagePhotosAsync.fulfilled, (state, action: PayloadAction<[{}]>) => {
            state.photos.push(...action.payload);
            state.loading = false;
        })
        .addCase(getPagePhotosAsync.rejected, (state) => {
            state.loading = false;
            state.error = "Something went wrong"
        })
        .addCase(getLikedPhotosAsync.pending, (state) => {
            state.loading = true;
            state.updateLikedPhotos = true;
        })
        .addCase(getLikedPhotosAsync.fulfilled, (state, action: PayloadAction<{}>) => {
            state.likedPhotos.push(action.payload);
            state.loading = false;
            state.updateLikedPhotos = false;
        })
        .addCase(getLikedPhotosAsync.rejected, (state) => {
            state.loading = false;
            state.updateLikedPhotos = false;
            state.error = "Something went wrong"
        })
        .addCase(getModalPhotoAsync.pending, (state) => {
            state.loading = true;
            state.updateLikedPhotos = true;
        })
        .addCase(getModalPhotoAsync.fulfilled, (state, action: PayloadAction<Photo>) => {
            state.modalPhoto = action.payload;
            state.loading = false;
            state.updateLikedPhotos = false;
        })
        .addCase(getModalPhotoAsync.rejected, (state) => {
            state.loading = false;
            state.updateLikedPhotos = false;
            state.error = "Something went wrong"
        })
    }
});

export const { likePhoto, dislikePhoto } = photosSlice.actions;

export default photosSlice.reducer;