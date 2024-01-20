import axios, {AxiosResponse} from 'axios';
import {
  API_ENDPOINTS,
  UNSPLASH_BASE_API,
  UNSPLASH_ACCESS_KEY,
} from '../constants/apiConstants';
import {IUnsplashPhoto} from '../../models/IUnsplashPhoto';

class UnsplashService {
  public async getPhotoListApi(
    count: number,
  ): Promise<AxiosResponse<IUnsplashPhoto[]>> {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${UNSPLASH_BASE_API}${API_ENDPOINTS.RANDOM}?client_id=${UNSPLASH_ACCESS_KEY}&count=${count}`,
        )
        .then((response: AxiosResponse<IUnsplashPhoto[]>) => {
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
}

export const unsplashService = new UnsplashService();
