import {combineReducers, configureStore} from '@reduxjs/toolkit';
import gallerySlice, {
  ConfigGalleryState,
} from './reducers/gallery/GallerySlice';

const rootReducer = combineReducers({
  gallery: gallerySlice as ConfigGalleryState,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
