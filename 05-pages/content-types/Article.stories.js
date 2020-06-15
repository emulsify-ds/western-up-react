import React from 'react';
import Layout from '../../04-templates/Layout/Layout.component';
import { items as menu } from '../../02-molecules/menus/MainMenu/MainMenu.data.json';
import { items as footerItems } from '../../02-molecules/menus/InlineMenu/InlineMenu.data.json';

import Heading from '../../01-atoms/text/Heading.component';
import Hr from '../../01-atoms/hr/Hr.component';
import Grid from '../../03-organisms/grid/Grid.component';
import NewsCard from '../../02-molecules/cards/NewsCard/NewsCard.component';
import Cta from '../../02-molecules/cta/Cta.component';
import Placeholder from '../../04-templates/Placeholder/Placeholder.component';
import ResponsiveImage from '../../01-atoms/images/ResponsiveImage/ResponsiveImage.component';

/**
 * Storybook Definition.
 */
export default { title: 'Pages/Content Types' };

export const Article = () => (
  <Layout
    menu={menu}
    footerItems={footerItems}
    hasSidebar={1}
    sidebar={<Placeholder placeholder="Secondary Content" />}
    title="Assessment record repeat whiteboard, define reaction Moodle."
  >
    <Heading level={2}> Knowles Cognitive Information Processing reaction label draft training</Heading>
    <ResponsiveImage
      outputImage={true}
      image={{
        alt: 'Students at sunset',
        src: 'https://source.unsplash.com/96DW4Pow3qI/725x425',
      }}
    />
    <Hr />
    <Grid gridLabel="Upcoming Events" gridType="card">
      <NewsCard
        additionalClasses={['grid__item']}
        outputImage={true}
        image={{
          alt: 'People',
          src: 'https://picsum.photos/id/987/480/300',
        }}
        heading="Meet and Greet with the Chancellor"
        subheading="Mark Namerson Visits the Students"
        linkText="RSVP today"
        linkUrl="#"
        body="Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat."
        tag="People"
        date="2119-01-09T12:00:00"
      />
      <NewsCard
        additionalClasses={['grid__item']}
        outputImage={true}
        image={{
          alt: 'Nature',
          src: 'https://picsum.photos/id/678/480/300',
        }}
        heading="Hike the Hills and Valleys of PA"
        subheading="Visiting Our National Parks"
        body="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo."
        tag="Nature"
        date="2119-04-11T12:00:00"
      />
      <NewsCard
        additionalClasses={['grid__item']}
        outputImage={true}
        image={{
          alt: 'Animals',
          src: 'https://picsum.photos/id/654/480/300',
        }}
        heading="Going Ape for the Environmental Job Fair"
        subheading="Pittsburgh Zoo Hosts Environmental Job Fair in August"
        body="Tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.. Nulla quis lorem ut libero malesuada feugiat."
        tag="Animals"
        date="2119-12-09T12:00:00"
      />
    </Grid>
    <Hr />
    <Cta
      modifiers={['home']}
      heading="World Class Library System"
      buttonText="Visit in Virtual Reality"
    />
  </Layout>
);
