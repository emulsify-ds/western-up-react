import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from '../../01-atoms/image/ResponsiveImage.component';
import Paragraph from '../../01-atoms/text/Paragraph.component';
import withModifiers from '../../_utils/withModifiers';

const TextWithImage = ({content, outputImage, sources, image}) => (
  <div className='temp'>
    <div className='image__'>
      <ResponsiveImage
        outputImage={outputImage}
        sources={sources}
        image={image}
      />
    </div>
    <div className='text__'>
      <Paragraph>{content}</Paragraph>
    </div>
  </div>
);

TextWithImage.propTypes = {
  ctaModifiers: PropTypes.arrayOf(PropTypes.string),
  heading: PropTypes.string.isRequired,
  buttonModifiers: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string.isRequired,
};

export default TextWithImage;
