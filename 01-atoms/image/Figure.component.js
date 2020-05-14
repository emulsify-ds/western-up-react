import React from 'react';
import PropTypes from 'prop-types';
import { imageTypeProps } from './Image.component';
import ResponsiveImage from './ResponsiveImage.component';
import withModifiers from '../../_utils/withModifiers';

const Figure = ({ modifiers, url, caption, outputImage, sources, image }) =>
  <figure className={withModifiers('figure')(modifiers)}>
    <ConditionalLink url={url} >
      <ResponsiveImage
        outputImage={outputImage}
        sources={sources}
        image={{
          src: image.src,
          srcSet: image.srcset,
          sizes: image.sizes,
          alt: image.alt,
          title: image.title,
        }}
      />
    </ConditionalLink>
    <figcaption className='figure__caption'>
      { caption }
    </figcaption>
  </figure>;

Figure.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
  image: imageTypeProps,
  caption: PropTypes.string,
  outputImage: PropTypes.bool,
  sources: PropTypes.arrayOf({
    media: PropTypes.string,
    source: PropTypes.string.isRequired
  }),
};

const ConditionalLink = ({ url, children }) =>
  <>
    { url ? (
      <a className='link' href={url}>{children}</a>
    ) : (
       children
    )}
  </>;

export default Figure;
