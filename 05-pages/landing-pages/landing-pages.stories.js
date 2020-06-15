import React from 'react';
import Layout from '../../04-templates/Layout/Layout.component';
import { items as menu } from '../../02-molecules/menus/MainMenu/MainMenu.data.json';
import { items as footerItems } from '../../02-molecules/menus/InlineMenu/InlineMenu.data.json';

import Hero from '../../02-molecules/Hero/Hero.component';
import Heading from '../../01-atoms/text/Heading.component';
import TextWithImage from '../../02-molecules/TextWithImage/TextWithImage.component';
import Hr from '../../01-atoms/hr/Hr.component';
import Grid from '../../03-organisms/grid/Grid.component';
import NewsCard from '../../02-molecules/cards/NewsCard/NewsCard.component';
import Cta from '../../02-molecules/cta/Cta.component';

/**
 * Storybook Definition.
 */
export default { title: 'Pages/Landing Pages/Home' };

export const Home = () => (
  <Layout
    menu={menu}
    hero={
      <Hero
        outputImage={true}
        image={{
          alt: 'Bridge from the road',
          srcset:
            'https://source.unsplash.com/64iuIOektb4/320x180 320w, https://source.unsplash.com/64iuIOektb4/480x270 480w, https://source.unsplash.com/64iuIOektb4/640x360 640w, https://source.unsplash.com/64iuIOektb4/800x450 800w, https://source.unsplash.com/64iuIOektb4/960x540 960w, https://source.unsplash.com/64iuIOektb4/1120x630 1120w, https://source.unsplash.com/64iuIOektb4/1280x720 1280w, https://source.unsplash.com/64iuIOektb4/1440x810 1440w, https://source.unsplash.com/64iuIOektb4/1600x900 1600w, https://source.unsplash.com/64iuIOektb4/1760x990 1760w, https://source.unsplash.com/64iuIOektb4/1920x1080 1920w, https://source.unsplash.com/64iuIOektb4/2080x1170 2080w, https://source.unsplash.com/64iuIOektb4/2240x1260 2240w',
          sizes: '100vw',
          src: 'https://source.unsplash.com/64iuIOektb4/320x180',
        }}
        heading="Discover Your Path"
      />
    }
    footerItems={footerItems}
  >
    <Heading level={2}>One of the Nation's Great Universities</Heading>
    <TextWithImage
      outputImage={true}
      image={{
        alt: 'Students at sunset',
        src: 'https://source.unsplash.com/96DW4Pow3qI/500x300',
      }}
      content="At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."
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
