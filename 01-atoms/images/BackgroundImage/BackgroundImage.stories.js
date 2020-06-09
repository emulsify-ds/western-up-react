import React from 'react';

import BackgroundImageComponent from './BackgroundImage.component';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Image' };

// Component Examples
export const BackgroundImage = () => (
  <div className="cl-example">
    <BackgroundImageComponent
      outputImage={true}
      image={{
        alt: 'Random Image from Picsum',
        src: 'https://picsum.photos/400/300.jpg',
        srcset:
          'https://source.unsplash.com/64iuIOektb4/320x180 320w, https://source.unsplash.com/64iuIOektb4/480x270 480w, https://source.unsplash.com/64iuIOektb4/640x360 640w, https://source.unsplash.com/64iuIOektb4/800x450 800w, https://source.unsplash.com/64iuIOektb4/960x540 960w, https://source.unsplash.com/64iuIOektb4/1120x630 1120w, https://source.unsplash.com/64iuIOektb4/1280x720 1280w, https://source.unsplash.com/64iuIOektb4/1440x810 1440w, https://source.unsplash.com/64iuIOektb4/1600x900 1600w, https://source.unsplash.com/64iuIOektb4/1760x990 1760w, https://source.unsplash.com/64iuIOektb4/1920x1080 1920w, https://source.unsplash.com/64iuIOektb4/2080x1170 2080w, https://source.unsplash.com/64iuIOektb4/2240x1260 2240w',
        sizes: '100vw',
      }}
    />
  </div>
);
export const BackgroundImageWithContent = () => (
  <div className="cl-example">
    <BackgroundImageComponent
      block="background-image--with-content"
      outputImage={true}
      image={{
        alt: 'Random Image from Picsum',
        src: 'https://picsum.photos/400/300.jpg',
        srcset:
          'https://source.unsplash.com/64iuIOektb4/320x180 320w, https://source.unsplash.com/64iuIOektb4/480x270 480w, https://source.unsplash.com/64iuIOektb4/640x360 640w, https://source.unsplash.com/64iuIOektb4/800x450 800w, https://source.unsplash.com/64iuIOektb4/960x540 960w, https://source.unsplash.com/64iuIOektb4/1120x630 1120w, https://source.unsplash.com/64iuIOektb4/1280x720 1280w, https://source.unsplash.com/64iuIOektb4/1440x810 1440w, https://source.unsplash.com/64iuIOektb4/1600x900 1600w, https://source.unsplash.com/64iuIOektb4/1760x990 1760w, https://source.unsplash.com/64iuIOektb4/1920x1080 1920w, https://source.unsplash.com/64iuIOektb4/2080x1170 2080w, https://source.unsplash.com/64iuIOektb4/2240x1260 2240w',
        sizes: '100vw',
      }}
    >
      <div>
        <h1>This is an awesome heading</h1>
        <p>And here's a pretty sweet paragraph.</p>
      </div>
    </BackgroundImageComponent>
  </div>
);
