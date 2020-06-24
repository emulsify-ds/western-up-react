import React from 'react';
import PropTypes from 'prop-types';
import withModifiers from '../../../_utils/withModifiers';

const Image = ({ modifiers, src, srcset, sizes, alt, title, children }) => {
  return (
    <>
      <img
        className={withModifiers('image')(modifiers)}
        src={src}
        srcSet={srcset}
        sizes={sizes}
        alt={alt}
        title={title}
      />
      {children}
    </>
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
