import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../../01-atoms/images/ResponsiveImage/ResponsiveImage.component';
import { imageTypeProps } from '../../../01-atoms/images/Image/Image.component';
import bem from '../../../_utils/bem';
import Heading from '../../../01-atoms/text/Heading.component';
import Paragraph from '../../../01-atoms/text/Paragraph.component';
import Button from '../../../01-atoms/buttons/Button.component';

const Card = ({
  outputImage,
  image,
  heading,
  subheading,
  body,
  buttonText,
  cardModifiers,
}) => {
  const block = 'card';
  return (
    <div className={bem(block, '', cardModifiers)}>
      {/* Image */}
      {image && (
        <div className={bem(block, 'image')}>
          <Image outputImage={outputImage} image={image} />
        </div>
      )}
      {/* Content */}
      <div className={bem(block, 'content')}>
        {/* Heading */}
        {heading && (
          <Heading level="2" block={block} element="heading">
            {heading}
          </Heading>
        )}
        {/* Subheading */}
        {subheading && (
          <Heading level="3" block={block} element="subheading">
            {subheading}
          </Heading>
        )}
        {/* Body */}
        {body && (
          <Paragraph block={block} element="body">
            {body}
          </Paragraph>
        )}
        {/* Button */}
        {buttonText && (
          <Button block={block} element="button">
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  outputImage: PropTypes.bool,
  image: imageTypeProps,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  body: PropTypes.string,
  buttonText: PropTypes.string,
};

export default Card;
