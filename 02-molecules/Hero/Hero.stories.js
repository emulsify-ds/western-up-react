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
      alt: 'Bridge from the road',
      srcset:
        'https://source.unsplash.com/64iuIOektb4/320x180 320w, https://source.unsplash.com/64iuIOektb4/480x270 480w, https://source.unsplash.com/64iuIOektb4/640x360 640w, https://source.unsplash.com/64iuIOektb4/800x450 800w, https://source.unsplash.com/64iuIOektb4/960x540 960w, https://source.unsplash.com/64iuIOektb4/1120x630 1120w, https://source.unsplash.com/64iuIOektb4/1280x720 1280w, https://source.unsplash.com/64iuIOektb4/1440x810 1440w, https://source.unsplash.com/64iuIOektb4/1600x900 1600w, https://source.unsplash.com/64iuIOektb4/1760x990 1760w, https://source.unsplash.com/64iuIOektb4/1920x1080 1920w, https://source.unsplash.com/64iuIOektb4/2080x1170 2080w, https://source.unsplash.com/64iuIOektb4/2240x1260 2240w',
      sizes: '100vw',
      src: 'https://source.unsplash.com/64iuIOektb4/320x180',
    }}
    heading="This is the hero heading"
  >
    This is some super awesome hero content
  </HeroComponent>
);
