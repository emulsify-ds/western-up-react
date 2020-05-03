import React from 'react';
import PropTypes, { any } from 'prop-types';
import Image from './Image.component';
import withModifiers from '../../_utils/withModifiers';

const Picture = ({ modifiers, sources = [], imageSrcset, imageSizes, imageSrc, imageAlt, imageTitle }) => {
  return (
    <picture
      className={withModifiers('picture')(modifiers)}
    >
      { sources.map( source => <source {...source} /> ) }
      <Image
        imageSrcset={imageSrcset}
        imageSizes={imageSizes}
        imageSrc={imageSrc}
        imageAlt={imageAlt}
        imageTitle={imageTitle}
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
  imageSrcset: PropTypes.string,
  imageSizes: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageTitle: PropTypes.string
};

export default Picture;
