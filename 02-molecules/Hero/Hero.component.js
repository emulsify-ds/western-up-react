import React from 'react';
import PropTypes from 'prop-types';
// import Image from '../../../01-atoms/images/ResponsiveImage/ResponsiveImage.component';
// import { imageTypeProps } from '../../../01-atoms/images/Image/Image.component';
import bem from '../../_utils/bem';
import BackgroundImage from '../../01-atoms/images/BackgroundImage/BackgroundImage.component';
import Heading from '../../01-atoms/text/Heading.component';
import Paragraph from '../../01-atoms/text/Paragraph.component';
// import Button from '../../../01-atoms/buttons/Button.component';

const Hero = ({ block = 'hero', outputImage, image, heading, content }) => {
  return (
    <BackgroundImage block={block} outputImage={outputImage} image={image}>
      <div className={bem(block, 'content')}>
        <div className={bem(block, 'content-inner')}>
          <Heading level="1" block={block} element="heading">
            {heading}
          </Heading>
          <Paragraph>{content}</Paragraph>
        </div>
      </div>
    </BackgroundImage>
  );
};

Hero.propTypes = {
  // outputImage: PropTypes.bool,
  // image: imageTypeProps,
  // heading: PropTypes.string,
  // subheading: PropTypes.string,
  // body: PropTypes.string,
  // buttonText: PropTypes.string,
};

export default Hero;
