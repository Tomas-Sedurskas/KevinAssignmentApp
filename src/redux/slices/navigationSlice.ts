import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { axios } from '../../utils/axios';
import data from '../../utils/apiResponseDummy.json';
import likedData from '../../utils/dummyLiked.json';

const navigationSlice = createSlice({
    name: 'navigation',
    initialState: {
        previousLocation: {
            hash: "",
            pathname: "/",
            search: "",
            state: undefined
        },
        renderModal: true
    },
    reducers: {
        renderModal: (state, action) => {
            console.log(action.payload)
            state.renderModal = true
            state.previousLocation = action.payload
        },
        hideModal: (state) => {
            state.renderModal = false
        },
    }
});

export const { renderModal } = navigationSlice.actions;

export default navigationSlice.reducer;