import React from 'react';
import PropTypes, { any } from 'prop-types';
import Image, { imagePropType } from './Image.component';
import withModifiers from '../../_utils/withModifiers';

const Picture = ({ modifiers, sources = [], image: { src, srcset, sizes, alt, title } }) => {
  return (
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
  );
}

Picture.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
  image: imagePropType,
  sources: PropTypes.arrayOf({
    media: PropTypes.string,
    source: PropTypes.string.isRequired
  })
};

export default Picture;
