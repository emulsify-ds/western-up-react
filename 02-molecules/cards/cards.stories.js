import React from 'react';

import Card from './Card/Card.component';
import NewsCard from './NewsCard/NewsCard.component';

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
      src: 'https://picsum.photos/400/300.jpg',
    }}
    heading="This is the card heading"
    subheading="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus"
    body="Ellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
    buttonText="Read more about this card"
  />
);
export const cardBg = () => (
  <Card
    cardModifiers={['bg']}
    outputImage={true}
    image={{
      alt: 'Random Image from Picsum',
      src: 'https://picsum.photos/400/300.jpg',
    }}
    heading="This is the card heading"
    subheading="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus"
    body="Ellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
    buttonText="Read more about this card"
  />
);
export const newsCard = () => (
  <NewsCard
    image={{
      alt: 'Random Image from Picsum',
      src: 'https://picsum.photos/400/300.jpg',
    }}
    heading="This is the card heading"
    subheading="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus"
    body="Ellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a."
    link_text="Read more about this card"
    date="2119-12-09T12:00:00"
    tag="Fun Stuff"
  />
);
