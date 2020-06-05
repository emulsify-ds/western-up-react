import React from 'react';

import HeroComponent from './Hero.component';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Hero' };

// Component Examples
export const Hero = () => (
  <HeroComponent
    outputImage={true}
    image={{
      alt: 'Random Image from Picsum',
      src: 'https://picsum.photos/400/300.jpg',
    }}
    heading="This is the hero heading"
  >
    This is some super awesome hero content
  </HeroComponent>
);
