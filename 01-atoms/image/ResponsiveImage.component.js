import React from 'react';
import PropTypes from 'prop-types';
import Image, { imageTypeProps } from './Image.component';
import withModifiers from '../../_utils/withModifiers';

const ResponsiveImage = ({ outputImage, modifiers, sources = [], image }) =>
  <>
    { outputImage ? (
      <Image
        modifiers={modifiers}
        src={image.src}
        srcSet={image.srcset}
        sizes={image.sizes}
        alt={image.alt}
        title={image.title}
      />
    ) : (
      <picture className={withModifiers('picture')(modifiers)}>
        { sources.map( source => <source {...source} /> ) }
        <Image
          src={image.src}
          srcSet={image.srcset}
          sizes={image.sizes}
          alt={image.alt}
          title={image.title}
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
  image: imageTypeProps
};

export default ResponsiveImage;
