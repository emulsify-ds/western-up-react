import React from 'react';
import Image from './Image.component';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Image' };

export const plain = () => (
  <Image
    src='https://picsum.photos/300/400.jpg'
    alt='Random Image from Picsum'
  />
)

export const srcSet = () => (
  <Image
    src='https://picsum.photos/400/300'
    alt='Random Image from Picsum using srcset'
    srcset='https://picsum.photos/400/300 400w, https://picsum.photos/800/700 800w'
    sizes='(max-width:600px) 400px, 800px'
  />
)
