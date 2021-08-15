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
        currentLocation: {
            hash: "",
            pathname: "/",
            search: "",
            state: undefined
        },
        renderModal: false
    },
    reducers: {
        renderModal: (state) => {
            state.renderModal = true
        },
        hideModal: (state) => {
            state.renderModal = false
        },
        setLocation: (state, action) => {
            console.log(action.payload)
            state.previousLocation.pathname = action.payload.previousLocation
            state.currentLocation.pathname = action.payload.currentLocation
        }
    }
});

export const { renderModal, hideModal, setLocation } = navigationSlice.actions;

export default navigationSlice.reducer;