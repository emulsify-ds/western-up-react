import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../../01-atoms/images/ResponsiveImage/ResponsiveImage.component';
import { imageTypeProps } from '../../../01-atoms/images/Image/Image.component';
import bem from '../../../_utils/bem';
import Heading from '../../../01-atoms/text/Heading.component';
import Paragraph from '../../../01-atoms/text/Paragraph.component';
import Link from '../../../01-atoms/links/Link.component';

const Card = ({
  outputImage,
  image,
  heading,
  subheading,
  children,
  linkText,
  linkUrl,
  cardModifiers,
  additionalClasses,
}) => {
  const block = 'card';
  return (
    <div className={bem(block, '', cardModifiers, additionalClasses)}>
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
        {children && (
          <Paragraph block={block} element="body">
            {children}
          </Paragraph>
        )}
        {/* Button */}
        {linkUrl && (
          <Link url={linkUrl} block={block} element="link">
            {linkText}
          </Link>
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
  body: PropTypes.children,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
};

export default Card;
