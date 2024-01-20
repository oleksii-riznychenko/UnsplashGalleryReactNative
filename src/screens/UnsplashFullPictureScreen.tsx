import React, {useCallback, useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import {Loader} from '../components/Loader/Loader';
import {IUnsplashPhoto} from '../models/IUnsplashPhoto';

export const UnsplashFullPictureScreen = ({route}): JSX.Element => {
  const {item}: {item: IUnsplashPhoto} = route.params;
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoad = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        {loading && (
          <View style={styles.loaderContainer}>
            <Loader />
          </View>
        )}
        <Image
          onLoad={handleLoad}
          style={styles.image}
          resizeMode="contain"
          source={{
            uri: item.urls.raw,
          }}
        />
      </View>
    </ScrollView>
  );
};

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height - 60,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
