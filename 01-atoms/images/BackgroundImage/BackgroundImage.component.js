import React from 'react';
import PropTypes from 'prop-types';
import Image from '../../../01-atoms/images/ResponsiveImage/ResponsiveImage.component';
import { imageTypeProps } from '../Image/Image.component';
import bem from '../../../_utils/bem';
import './BackgroundImage';

const BackgroundImage = ({ outputImage, image, children }) => {
  const block = 'react-background-image';

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-react-background-image] {
              position: relative;
              overflow: hidden;
            }
            [data-react-background-image__image] {
              position: absolute;
              height: 100%;
              width: 100%;
            }
            [data-react-background-image__image] img {
              height: 100%;
              width: 100%;
              object-fit: cover;
            }
            [data-react-background-image__content] {
              position: relative;
            }
          `,
        }}
      ></style>
      <div className={bem(block)} data-react-background-image>
        {/* Image */}
        <div className={bem(block, 'image')} data-react-background-image__image>
          {image && <Image outputImage={outputImage} image={image} />}
        </div>
        {/* Content */}
        <div
          className={bem(block, 'content')}
          data-react-background-image__content
        >
          {children}
        </div>
      </div>
    </>
  );
};

BackgroundImage.propTypes = {
  outputImage: PropTypes.bool,
  image: imageTypeProps.isRequired,
};

export default BackgroundImage;
