import React from 'react';
import PropTypes from 'prop-types';
import { imagePropType } from './Image.component';
import ResponsiveImage from './ResponsiveImage.component';
import withModifiers from '../../_utils/withModifiers';

const Figure = ({ modifiers, link, caption, outputImage, sources, image }) => 
  <figure className={withModifiers('figure')(modifiers)}>
    <ConditionalLink 
      link={link} 
      modifiers={modifiers}
    >
      <ResponsiveImage 
        outputImage={outputImage}
        sources={sources}
        image={image}
      />
    </ConditionalLink>
    <figcaption className={withModifiers('caption')(modifiers)}>
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
  image: imagePropType
};

const ConditionalLink = ({ link, modifiers, children }) => 
  <>
    { link ? (
      <a 
        className={withModifiers('link')(modifiers)} 
        href={link}
      >
        {children}
      </a>
    ) : (
       children 
    )}
  </>;

export default Figure;
