import React, {useCallback, useEffect} from 'react';
import {UnknownAction} from '@reduxjs/toolkit';
import {FlatList, RefreshControl, TouchableOpacity} from 'react-native';
import {Loader} from '../components/Loader/Loader';
import {useAppDispatch, useAppSelector} from '../hooks/redux';
import {GalleryItem} from '../components/GalleryItem/GalleryItem';
import {fetchPhoto} from '../store/reducers/gallery/GalleryActionCreator';

export const UnsplashGalleryListScreen = ({navigation}): JSX.Element => {
  const dispatch = useAppDispatch();
  const gallery = useAppSelector(state => state.gallery);

  const handleFetchPhoto = useCallback(() => {
    dispatch(fetchPhoto(10) as UnknownAction);
  }, []);

  useEffect(() => {
    handleFetchPhoto();
  }, []);

  return gallery.loading ? (
    <Loader />
  ) : (
    <FlatList
      data={gallery.photosData}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => navigation.navigate('Photo', {item})}>
          <GalleryItem
            uri={item.urls.thumb}
            name={item.user.name}
            title={item.description || item.location.name || item.id}
          />
        </TouchableOpacity>
      )}
      refreshControl={
        <RefreshControl
          onRefresh={handleFetchPhoto}
          refreshing={gallery.loading}
        />
      }
    />
  );
};
