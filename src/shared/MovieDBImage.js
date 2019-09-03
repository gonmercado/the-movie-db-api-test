import React from 'react';
import { string, oneOf } from 'prop-types';
import useApiConfigurationContext from "enhacers/useApiConfigurationContext";
const sizes = [ 'small', 'medium', 'large'];

const getImageSize = (apiSettings, type, size) => {
  const imageProp = apiSettings.images[`${ type }_sizes`];
  if (!imageProp ) throw `Error: "${ type }" Is not a valid type of image`;
  if (!type || !size) return 'original';
  switch (size) {
    case sizes[0]: //small images, get first size in the array
      return imageProp[0];
    case sizes[1]: //medium image, get the one in the middle of the array
      return imageProp[Math.floor(imageProp.length / 2)];
    case sizes[2]: //big image, get the one before the last of the array (the last one is original)
      return imageProp[apiSettings.images[`${ type }_sizes`].length - 2];
    default:
      return 'original';
  }
}

const MovieDBImage = ({ src, alt, type, size }) => {
  const apiSettings = useApiConfigurationContext();
  return (
    <img src={ `${ apiSettings.images.base_url }${ getImageSize(apiSettings, type, size) }/${ src }` } alt={ alt } />
  );
};

MovieDBImage.propTypes = {
  src: string.isRequired,
  alt: string,
  type: oneOf(['backdrop', 'logo', 'poster', 'profile', 'still']),
  //TODO: this could be calculted from the windows size that way big images, are only loaded on big devices. For now its an optional prop.
  size: oneOf(sizes)
};

export default MovieDBImage;

