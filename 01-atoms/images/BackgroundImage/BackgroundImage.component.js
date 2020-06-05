import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../../01-atoms/images/ResponsiveImage/ResponsiveImage.component';
import { imageTypeProps } from '../Image/Image.component';
import bem from '../../../_utils/bem';

const BackgroundImage = ({
  outputImage,
  image,
  children,
  block = 'background-image',
}) => {
  return (
    <div className={bem(block)}>
      {/* Image */}
      <div className={bem(block, 'image')}>
        {image && <Image outputImage={outputImage} image={image} />}
      </div>
      {/* Content */}
      {children && <div className={bem(block, 'content')}>{children}</div>}
    </div>
  );
};

BackgroundImage.propTypes = {
  outputImage: PropTypes.bool,
  image: imageTypeProps.isRequired,
  block: PropTypes.string.isRequired,
};

export default BackgroundImage;
