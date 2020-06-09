import React from 'react';

import Grid from './Grid.component';
import Card from '../../02-molecules/cards/Card/Card.component';
import Cta from '../../02-molecules/cta/Cta.component';
import NewsCard from '../../02-molecules/cards/NewsCard/NewsCard.component';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Grid' };

export const DefaultGrid = () => (
  <Grid gridLabel="Default">
    <div class="grid__item grid__item--example"></div>
    <div class="grid__item grid__item--example"></div>
    <div class="grid__item grid__item--example"></div>
  </Grid>
);
export const CardGrid = () => (
  <Grid gridLabel="Card Grid" gridType="card">
    <Card
      additionalClasses={['grid__item']}
      outputImage={true}
      image={{
        alt: 'People',
        src: 'https://picsum.photos//id/26/480/300',
      }}
      heading="Super Awesome Card"
      subheading="Person of Interest"
      linkText="Click here"
      linkUrl="#"
    >
      Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus
      magna justo, lacinia eget consectetur sed, convallis at tellus. Donec
      rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor
      lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna
      justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in
      ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat.
      Nulla quis lorem ut libero malesuada feugiat.
    </Card>
    <Card
      additionalClasses={['grid__item']}
      outputImage={true}
      image={{
        alt: 'Nature',
        src: 'https://picsum.photos/id/112/480/300',
      }}
      heading="Card Number Two"
      subheading="Some pretty sweet nature"
    >
      Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
      Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed
      porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.
      Vivamus magna justo.
    </Card>
    <Card
      additionalClasses={['grid__item']}
      outputImage={true}
      image={{
        alt: 'Animals',
        src: 'https://picsum.photos/id/237/480/300',
      }}
      heading="The Last Card Heading"
      subheading="Awesome animals"
    >
      Tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget
      consectetur sed, convallis at tellus. Donec rutrum congue leo eget
      malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis
      lorem ut libero malesuada feugiat.. Nulla quis lorem ut libero malesuada
      feugiat.
    </Card>
  </Grid>
);

export const CtaGrid = () => (
  <Grid gridLabel="CTA Grid">
    <Cta
      additionalClasses={['grid__item']}
      heading="This is an awesome CTA"
      buttonText="Click me!"
    />
    <Cta
      additionalClasses={['grid__item']}
      heading="This is an even better CTA!!"
      buttonText="No, click me!"
    />
    <Cta
      additionalClasses={['grid__item']}
      heading="This is a boring CTA"
      buttonText="Click me, I guess..."
    />
  </Grid>
);

export const NewsCardGrid = () => (
  <Grid gridLabel="News Card Grid">
    <NewsCard
      additionalClasses={['grid__item']}
      image={{
        alt: 'Random Image from Picsum',
        src: 'https://picsum.photos/1280/720',
      }}
      heading="Here's the super awesome heading!"
      subheading="The student center"
      body="Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
      linkText="Click Me!"
      linkUrl="#"
      date="2119-12-09T12:00:00"
      tag="Photos"
    />
    <NewsCard
      additionalClasses={['grid__item']}
      image={{
        alt: 'Random Image from Picsum',
        src: 'https://picsum.photos/1280/720',
      }}
      heading="This news will be incredible"
      subheading="The student center"
      body="Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
      linkText="Click Me!"
      linkUrl="#"
      date="2119-12-10T12:00:00"
      tag="Photos"
    />
    <NewsCard
      additionalClasses={['grid__item']}
      image={{
        alt: 'Random Image from Picsum',
        src: 'https://picsum.photos/1280/720',
      }}
      heading="Here's the super awesome heading!"
      subheading="The student center"
      body="Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
      linkText="Click Me!"
      linkUrl="#"
      date="2120-01-23T12:00:00"
      tag="Photos"
    />
  </Grid>
);
