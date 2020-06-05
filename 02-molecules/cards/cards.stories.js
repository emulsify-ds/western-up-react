import React from 'react';

import Card from './Card/Card.component';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cards' };

// Component Examples
export const card = () => (
  <Card
    outputImage={true}
    image={{
      alt: 'Random Image from Picsum',
      src: 'https://picsum.photos/1280/720.jpg',
    }}
    heading="This is the card heading"
    subheading="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus"
    body="Ellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
    linkText="Read more about this card"
    linkUrl="#"
  />
);
export const cardWithBackground = () => (
  <Card
    cardModifiers={['bg']}
    outputImage={true}
    image={{
      alt: 'Random Image from Picsum',
      src: 'https://picsum.photos/1280/720.jpg',
    }}
    heading="This is the card heading"
    subheading="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus"
    body="Ellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
    linkText="Read more about this card"
    linkUrl="#"
  />
);
