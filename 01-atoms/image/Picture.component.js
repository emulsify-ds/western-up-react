import React from 'react';
import PropTypes, { any } from 'prop-types';
import Image, { imageTypeProps } from './Image.component';
import withModifiers from '../../_utils/withModifiers';

const Picture = ({ modifiers, sources = [], src, srcset, sizes, alt, title }) => {
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
  sources: PropTypes.arrayOf({
    media: PropTypes.string,
    source: PropTypes.string.isRequired
  }),
  ...imageTypeProps
};

export default Picture;
