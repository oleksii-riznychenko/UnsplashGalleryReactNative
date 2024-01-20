import {createAsyncThunk} from '@reduxjs/toolkit';
import {IUnsplashPhoto} from '../../../models/IUnsplashPhoto';
import {unsplashService} from '../../../api/services/unsplashApiService';

export const fetchPhoto = createAsyncThunk<
  IUnsplashPhoto[],
  number,
  {rejectValue: string}
>('gallery/fetchList', async (count = 10, {rejectWithValue}) => {
  try {
    return await unsplashService.getPhotoListApi(count).then(res => res.data);
  } catch (e: unknown) {
    return rejectWithValue('An error occurred. Please try again later.');
  }
});
