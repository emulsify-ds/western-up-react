import React from 'react';
import PropTypes from 'prop-types';
import ResponsiveImage from '../../01-atoms/images/ResponsiveImage/ResponsiveImage.component';
import { imageTypeProps } from '../../01-atoms/images/Image/Image.component';
import Paragraph from '../../01-atoms/text/Paragraph.component';
import bem from '../../_utils/bem';

const blockName = 'text-with-image';

const TextWithImage = ({ modifiers, content, image, outputImage, sources }) => (
  <div className={bem(blockName, null, modifiers)}>
    <div className={bem(blockName, 'image')}>
      <ResponsiveImage
        outputImage={outputImage}
        sources={sources}
        image={image}
      />
    </div>
    <div className={bem(blockName, 'text')}>
      <Paragraph>{content}</Paragraph>
    </div>
  </div>
);

TextWithImage.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string,
  outputImage: PropTypes.bool,
  image: imageTypeProps,
  sources: PropTypes.arrayOf({
    media: PropTypes.string,
    source: PropTypes.string.isRequired,
  }),
};

export default TextWithImage;
