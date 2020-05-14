import React from 'react';
import ResponsiveImage from './ResponsiveImage.component';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Image' };

export const responsive = () => (
  <ResponsiveImage
    outputImage={false}
    sources={[
      {
        'media': '(min-width: 650px)',
        'source': 'https://picsum.photos/400/525.jpg'
      },
      {
        'media': '(min-width: 465px)',
        'source': 'https://picsum.photos/300/400.jpg'
      }
    ]}
    image={{
      alt: 'Random Image from Picsum',
      src: 'https://picsum.photos/300/400.jpg'
    }}
    a
  />
)
