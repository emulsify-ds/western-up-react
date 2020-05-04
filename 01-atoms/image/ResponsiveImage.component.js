import React from 'react';
import PropTypes from 'prop-types';
import Image, { imagePropType } from './Image.component';
import withModifiers from '../../_utils/withModifiers';

const ResponsiveImage = ({ outputImage, modifiers, sources = [], image: { src, srcset, sizes, alt, title } }) => 
  <>
    { outputImage ? (
      <Image
        modifiers={modifiers}
        src={src}
        srcSet={srcset}
        sizes={sizes}
        alt={alt}
        title={title}
      />
    ) : (
      <picture className={withModifiers('picture')(modifiers)}>
        { sources.map( source => <source {...source} /> ) }
        <Image
          src={src}
          srcSet={srcset}
          sizes={sizes}
          alt={alt}
          title={title}
        />
      </picture>
    )}
  </>;

ResponsiveImage.propTypes = {
  outputImage: PropTypes.bool,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  sources: PropTypes.arrayOf({
    media: PropTypes.string,
    source: PropTypes.string.isRequired
  }),
  image: imagePropType
};

export default ResponsiveImage;
