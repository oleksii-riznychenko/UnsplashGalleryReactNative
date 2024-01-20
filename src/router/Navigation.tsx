import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {UnsplashGalleryListScreen} from '../screens/UnsplashGalleryListScreen';
import {UnsplashFullPictureScreen} from '../screens/UnsplashFullPictureScreen';

const Stack = createNativeStackNavigator();

export const Navigation = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GalleryList">
        <Stack.Screen
          name="GalleryList"
          options={{title: 'Gallery'}}
          component={UnsplashGalleryListScreen}
        />
        <Stack.Screen
          name="Photo"
          options={{title: 'Picture'}}
          component={UnsplashFullPictureScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
