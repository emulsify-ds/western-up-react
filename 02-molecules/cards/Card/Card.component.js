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
      <div className={bem(block, 'image')}>
        {image && <Image outputImage={outputImage} image={image} />}
      </div>
      {/* Content */}
      <div className={bem(block, 'content')}>
        {/* Heading */}
        {heading && (
          <Heading
            level="2"
            children={heading}
            block={block}
            element="heading"
          />
        )}
        {/* Subheading */}
        {subheading && (
          <Heading
            level="3"
            children={subheading}
            block={block}
            element="subheading"
          />
        )}
        {/* Body */}
        {body && <Paragraph children={body} block={block} element="body" />}
        {/* Button */}
        {buttonText && (
          <Button children={buttonText} block={block} element="button" />
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
