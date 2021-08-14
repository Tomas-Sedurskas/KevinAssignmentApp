import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import photosSlice from './slices/photosSlice';
import navigationSlice from './slices/navigationSlice';

export const store = configureStore({
  reducer: {
    photosSlice,
    navigationSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
