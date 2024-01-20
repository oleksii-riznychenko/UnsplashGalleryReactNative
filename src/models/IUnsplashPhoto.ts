interface IExif {
  iso: number;
  make: string;
  model: string;
  aperture: string;
  focal_length: string;
  exposure_time: string;
}

interface ILocation {
  name: string;
  city: string;
  country: string;
  position: {
    latitude: number;
    longitude: number;
  };
}

interface IUrls {
  raw: string;
  full: string;
  small: string;
  thumb: string;
  regular: string;
}

interface ILinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface IUser {
  id: string;
  bio: string;
  name: string;
  links: ILinks;
  username: string;
  location: string;
  updated_at: string;
  total_likes: number;
  total_photos: number;
  portfolio_url: string;
  twitter_username: string;
  total_collections: number;
  instagram_username: string;
}

export interface IUnsplashPhoto {
  id: string;
  exif: IExif;
  urls: IUrls;
  user: IUser;
  links: ILinks;
  color: string;
  width: number;
  likes: number;
  height: number;
  blur_hash: string;
  downloads: number;
  created_at: string;
  updated_at: string;
  description: string;
  location: ILocation;
  liked_by_user: boolean;
  current_user_collections: string[];
}
