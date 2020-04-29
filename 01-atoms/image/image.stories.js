import React from 'react';

import Image from './Image.component';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Image' };

export const plain = () => (
  <Image
    imageAlt='Random Image from Picsum'
    imageSrc='https://picsum.photos/300/400.jpg'
  />
)

export const srcSet = () => (
  <Image
    imageAlt='Random Image from Picsum using srcset'
    imageSrcset='https://picsum.photos/400/300 400w, https://picsum.photos/800/700 800w'
    imageSizes='(max-width:600px) 400px, 800px'
    imageSrc='https://picsum.photos/400/300'
  />
)
