import React from 'react';
import PropTypes, { any } from 'prop-types';
import Image, { imageTypeProps } from '../Image/Image.component';
import withModifiers from '../../../_utils/withModifiers';

const Picture = ({ modifiers, sources = [], image }) => {
  return (
    <picture className={withModifiers('picture')(modifiers)}>
      {sources.map((source) => (
        <source {...source} />
      ))}
      <Image
        src={image.src}
        srcSet={image.srcset}
        sizes={image.sizes}
        alt={image.alt}
        title={image.title}
      />
    </picture>
  );
};

Picture.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
  sources: PropTypes.arrayOf({
    media: PropTypes.string,
    source: PropTypes.string.isRequired,
  }),
  image: imageTypeProps,
};

export default Picture;
