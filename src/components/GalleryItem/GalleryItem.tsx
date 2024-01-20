import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {IGalleryItemProps} from './GalleryItem.types';

export const GalleryItem = ({
  uri,
  name,
  title,
}: IGalleryItemProps): JSX.Element => {
  return (
    <View style={styles.galleryContainer}>
      <Image style={styles.galleryImage} source={{uri}} />
      <View style={styles.galleryDetails}>
        <Text style={styles.galleryTitle} numberOfLines={3}>
          {title}
        </Text>
        <Text style={styles.galleryDescription} numberOfLines={1}>
          {name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  galleryContainer: {
    padding: 15,
    height: 100,
    flexDirection: 'row',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  galleryImage: {
    width: 70,
    height: 70,
    marginRight: 10,
    borderRadius: 10,
    objectFit: 'cover',
  },
  galleryDetails: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  galleryTitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
  galleryDescription: {
    fontSize: 14,
    marginTop: 5,
    color: '#333',
  },
});
