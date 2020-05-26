import React from 'react';
import Image from './Image.component';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Image' };

export const image = () => (
  <Image
    src="https://picsum.photos/300/400.jpg"
    alt="Random Image from Picsum"
  />
);

export const imageSrcSet = () => (
  <Image
    src="https://placeimg.com/320/180/any"
    alt="A 16 by 9 image"
    srcset="https://placeimg.com/320/180/any 320w, https://placeimg.com/480/270/any 480w, https://placeimg.com/640/360/any 640w, https://placeimg.com/800/450/any 800w, https://placeimg.com/960/540/any 960w, https://placeimg.com/1120/630/any 1120w, https://placeimg.com/1280/720/any 1280w, https://placeimg.com/1440/810/any 1440w, https://placeimg.com/1600/900/any 1600w, https://placeimg.com/1760/990/any 1760w, https://placeimg.com/1920/1080/any 1920w, https://placeimg.com/2080/1170/any 2080w, https://placeimg.com/2240/1260/any 2240w"
    sizes="100vw"
  />
);
