import React from 'react';
import PropTypes from 'prop-types';
import { imageTypeProps } from './Image.component';
import ResponsiveImage from './ResponsiveImage.component';
import withModifiers from '../../_utils/withModifiers';

const Figure = ({ modifiers, link, caption, outputImage, sources, src, srcset, sizes, alt, title }) => 
  <figure className={withModifiers('figure')(modifiers)}>
    <ConditionalLink link={link} >
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

const ConditionalLink = ({ link, modifiers, children }) => 
  <>
    { link ? (
      <a 
        className='link'
        href={link}
      >
        {children}
      </a>
    ) : (
       children 
    )}
  </>;

export default Figure;
