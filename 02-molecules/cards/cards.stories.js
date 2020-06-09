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
      src: 'https://picsum.photos/1280/720.jpg',
    }}
    heading="This is the card heading"
    subheading="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus"
    linkText="Read more about this card"
    linkUrl="#"
  >
    Ellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit,
    eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt
    nibh pulvinar a.
  </Card>
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
    linkText="Read more about this card"
    linkUrl="#"
  >
    Ellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet elit,
    eget tincidunt nibh pulvinar a. Mauris blandit aliquet elit, eget tincidunt
    nibh pulvinar a.
  </Card>
);
export const newsCard = () => (
  <NewsCard
    image={{
      alt: 'Random Image from Picsum',
      src: 'https://picsum.photos/1280/720.jpg',
    }}
    heading="City Lights in New York"
    subheading="The city that never sleeps"
    body="Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
    linkText="Click Me!"
    linkUrl="#"
    date="2119-12-09T12:00:00"
    tag="Photos"
  />
);
