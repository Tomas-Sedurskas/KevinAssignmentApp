import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
        renderModal: true
    },
    reducers: {
        renderModal: (state) => {
            state.renderModal = true
        },
        hideModal: (state) => {
            state.renderModal = false
        },
        setLocation: (state, action: PayloadAction<{previousLocation: string, currentLocation: string}>) => {
            state.previousLocation.pathname = action.payload.previousLocation
            state.currentLocation.pathname = action.payload.currentLocation
        }
    }
});

export const { renderModal, hideModal, setLocation } = navigationSlice.actions;

export default navigationSlice.reducer;