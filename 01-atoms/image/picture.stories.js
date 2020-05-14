import React from 'react';
import Picture from './Picture.component';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Image' };

export const picture = () => (
  <Picture
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
  />
)
