import React from 'react';
import PropTypes from 'prop-types';
import withModifiers from '../../_utils/withModifiers';

const Image = ({ modifiers, imageSrcset, imageSizes, imageSrc, imageAlt, imageTitle }) => {
  return (
    <img
    className={withModifiers('img')(modifiers)}
      srcSet={imageSrcset}
      sizes={imageSizes}
      src={imageSrc}
      alt={imageAlt}
      title={imageTitle}
    />
  );
}

Image.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
  imageSrcset: PropTypes.string,
  imageSizes: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageTitle: PropTypes.string
};

export default Image;
