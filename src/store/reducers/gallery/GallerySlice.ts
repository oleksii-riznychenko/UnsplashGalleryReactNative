import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IUnsplashPhoto} from '../../../models/IUnsplashPhoto';
import {fetchPhoto} from './GalleryActionCreator';

export interface ConfigGalleryState {
  loading: boolean;
  error: string | null;
  photosData: IUnsplashPhoto[] | null;
}

const initialState: ConfigGalleryState = {
  error: null,
  loading: true,
  photosData: null,
};

const gallerySlice = createSlice<ConfigGalleryState>({
  name: 'gallery',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchPhoto.pending, state => {
      state.error = null;
      state.loading = true;
    });
    builder.addCase(
      fetchPhoto.fulfilled,
      (state, action: PayloadAction<IUnsplashPhoto[]>) => {
        state.error = null;
        state.loading = false;
        state.photosData = action.payload || null;
      },
    );
    builder.addCase(
      fetchPhoto.rejected,
      (state, action: PayloadAction<string | undefined>) => {
        state.loading = false;
        state.photosData = null;
        state.error = action.payload || 'An error occurred.';
      },
    );
  },
});

export default gallerySlice.reducer;
