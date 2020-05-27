import React from 'react';
import PropTypes from 'prop-types';
import withModifiers from '../../../_utils/withModifiers';

const Image = ({ modifiers, src, srcset, sizes, alt, title }) => {
  return (
    <img
      className={withModifiers('img')(modifiers)}
      src={src}
      srcSet={srcset}
      sizes={sizes}
      alt={alt}
      title={title}
    />
  );
};

export const imageTypeProps = PropTypes.shape({
  modifiers: PropTypes.arrayOf(PropTypes.string),
  src: PropTypes.string,
  srcset: PropTypes.string,
  sizes: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
});

Image.propTypes = imageTypeProps;

export default Image;
