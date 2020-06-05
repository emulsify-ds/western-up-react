import React from 'react';
import PropTypes from 'prop-types';
import bem from '../../_utils/bem';
import BackgroundImage from '../../01-atoms/images/BackgroundImage/BackgroundImage.component';
import { imageTypeProps } from '../../01-atoms/images/Image/Image.component';
import Heading from '../../01-atoms/text/Heading.component';
import Paragraph from '../../01-atoms/text/Paragraph.component';

const Hero = ({ block = 'hero', outputImage, image, heading, children }) => {
  return (
    <BackgroundImage block={block} outputImage={outputImage} image={image}>
      <div className={bem(block, 'content')}>
        <div className={bem(block, 'content-inner')}>
          <Heading level="1" block={block} element="heading">
            {heading}
          </Heading>
          <Paragraph>{children}</Paragraph>
        </div>
      </div>
    </BackgroundImage>
  );
};

Hero.propTypes = {
  block: PropTypes.string,
  outputImage: PropTypes.bool,
  image: imageTypeProps,
  heading: PropTypes.string,
};

export default Hero;
