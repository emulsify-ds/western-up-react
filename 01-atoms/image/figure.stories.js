import React from 'react';
import Figure from './Figure.component';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Image' };

export const figure = () => (
  <Figure
    outputImage={true}
    caption='This is an image caption.'
    link='#'
    image={{
      alt: 'Random Image from Picsum',
      src: 'https://picsum.photos/300/400.jpg'
    }}
  />
)
