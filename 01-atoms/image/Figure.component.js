import React from 'react';
import PropTypes from 'prop-types';
import { imageTypeProps } from './Image.component';
import ResponsiveImage from './ResponsiveImage.component';
import withModifiers from '../../_utils/withModifiers';

const Figure = ({ modifiers, url, caption, outputImage, sources, src, srcset, sizes, alt, title }) => 
  <figure className={withModifiers('figure')(modifiers)}>
    <ConditionalLink url={url} >
      <ResponsiveImage 
        outputImage={outputImage}
        sources={sources}
        src={src}
        srcSet={srcset}
        sizes={sizes}
        alt={alt}
        title={title}
      />
    </ConditionalLink>
    <figcaption className='figure__caption'>
      { caption }
    </figcaption>
  </figure>;

Figure.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
  caption: PropTypes.string,
  outputImage: PropTypes.bool,
  sources: PropTypes.arrayOf({
    media: PropTypes.string,
    source: PropTypes.string.isRequired
  }),
  ...imageTypeProps
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
