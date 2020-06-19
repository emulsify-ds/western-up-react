import React from 'react';
import Layout from '../../04-templates/Layout/Layout.component';
import { items as menu } from '../../02-molecules/menus/MainMenu/MainMenu.data.json';
import { items as footerItems } from '../../02-molecules/menus/InlineMenu/InlineMenu.data.json';
import { items as breadcrumbs } from '../../02-molecules/menus/Breadcrumbs/Breadcrumbs.data.json';

import Heading from '../../01-atoms/text/Heading.component';
import Hr from '../../01-atoms/hr/Hr.component';
import Grid from '../../03-organisms/grid/Grid.component';
import Card from '../../02-molecules/cards/Card/Card.component';
import Cta from '../../02-molecules/cta/Cta.component';
import ResponsiveImage from '../../01-atoms/images/ResponsiveImage/ResponsiveImage.component';
import Paragraph from '../../01-atoms/text/Paragraph.component';
import UnorderedList from '../../01-atoms/lists/UnorderedList.component';

/**
 * Storybook Definition.
 */
export default { title: 'Pages/Content Types' };

export const Article = () => (
  <Layout
    menu={menu}
    breadcrumbs={breadcrumbs}
    title="Assessment record repeat whiteboard, define reaction Moodle."
    footerItems={footerItems}
    hasSidebar={1}
    sidebar={
      <>
        <Cta
          heading="Education Podcast"
          buttonText="Subscribe"
        />
        <Heading level={3}>Upcoming Events</Heading>
        <UnorderedList
          items={[
            { content: 'This is the first item in the unordered list.' },
            {
              label: 'This is the optional label',
              content: 'And here is the item that goes with the label.',
            },
            { content: "Here's the third item." },
            { content: "And here's the last item." },
          ]}
        />
      </>
    }
  >
    <Heading level={2}> Knowles Cognitive Information Processing reaction label draft training</Heading>
    <ResponsiveImage
      outputImage={true}
      modifiers={['mb-space']}
      image={{
        alt: 'Castle',
        src: 'https://source.unsplash.com/A_InfAQM_lU/1600x900',
      }}
    />
    <Paragraph>
      At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
    </Paragraph>
    <Paragraph>
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. 
    </Paragraph>
    <Grid gridLabel="Development label repeat mints select pedagogy whiteboard click next asynchronous learning record instructional design" gridType="card">
      <Card
        additionalClasses={['grid__item']}
        outputImage={true}
        image={{
          alt: 'People',
          src: 'https://picsum.photos/id/987/480/300',
        }}
        heading="Assessment ipsum laboris incididunt list in consequat"
        subheading="Person of Interest"
        linkText="Continue Reading"
        linkUrl="#"
      >
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh.
      </Card>
      <Card
        additionalClasses={['grid__item']}
        outputImage={true}
        image={{
          alt: 'Nature',
          src: 'https://picsum.photos/id/678/480/300',
        }}
        heading="Aliqua irure training, ullamco deserunt ad"
        subheading=" Some pretty sweet nature"
      >
        Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo.
      </Card>
      <Card
        additionalClasses={['grid__item']}
        outputImage={true}
        image={{
          alt: 'Animals',
          src: 'https://picsum.photos/id/654/480/300',
        }}
        heading="SCORM anim assessment mints commodo"
        subheading="Awesome animals"
      >
        Tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Donec rutrum congue leo eget malesuada. Proin eget tortor risus. Sed porttitor lectus nibh. Nulla quis lorem ut libero malesuada feugiat.
      </Card>
    </Grid>
    <Cta
      heading="See What Campus Has For You"
      buttonText="Request a Campus Visit"
    />
  </Layout>
);
