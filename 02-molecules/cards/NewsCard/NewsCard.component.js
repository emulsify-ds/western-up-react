import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../../01-atoms/images/ResponsiveImage/ResponsiveImage.component';
import { imageTypeProps } from '../../../01-atoms/images/Image/Image.component';
import bem from '../../../_utils/bem';
import Heading from '../../../01-atoms/text/Heading.component';
import Paragraph from '../../../01-atoms/text/Paragraph.component';
import Button from '../../../01-atoms/buttons/Button.component';

const NewsCard = ({
  outputImage,
  image,
  heading,
  subheading,
  body,
  buttonText,
  date,
  tag,
}) => {
  const block = 'news-card';
  const dateParsed = new Date(date);
  const day = new Intl.DateTimeFormat('en-US', {
    day: '2-digit',
  }).format(dateParsed);
  const month = new Intl.DateTimeFormat('en-US', {
    month: 'short',
  }).format(dateParsed);
  return (
    <div className={bem(block)}>
      {/* Content */}
      <div className={bem(block, 'content')}>
        <div className={bem(block, 'content-top')}>
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
        </div>
        {/* Body */}
        {body && <Paragraph children={body} block={block} element="body" />}
        {/* Button */}
        {buttonText && (
          <Button children={buttonText} block={block} element="button" />
        )}
      </div>
      <div className={bem(block, 'meta')}>
        {/* Image */}
        <div className={bem(block, 'image')}>
          {image && <Image outputImage={outputImage} image={image} />}
        </div>
        {/* Details */}
        <div className={bem(block, 'meta--details')}>
          <div className={bem(block, 'date')}>
            <span className={bem(block, 'day')}>{day}</span>
            <span className={bem(block, 'month')}>{month}</span>
          </div>
          {/* Tag */}
          {tag && <Paragraph children={tag} block={block} element="tag" />}
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  outputImage: PropTypes.bool,
  image: imageTypeProps,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  body: PropTypes.string,
  buttonText: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  tag: PropTypes.string,
};

export default NewsCard;
