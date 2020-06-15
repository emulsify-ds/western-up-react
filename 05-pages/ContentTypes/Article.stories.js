import React from 'react';
import Article from './Article.component';
import { items as menu } from '../../02-molecules/menus/MainMenu/MainMenu.data.json';
import { items as footerItems } from '../../02-molecules/menus/InlineMenu/InlineMenu.data.json';

/**
 * Storybook Definition.
 */
export default { title: 'Pages/Content Types' };

export const article = () => (
  <Article 
  menu={menu} 
  footerItems={footerItems} 
  hasSidebar={1} 
  title={"Assessment record repeat whiteboard, define reaction Moodle."}
  subtitle={"Knowles Cognitive Information Processing reaction label draft training"}
  outputImage={true}
  image={{
    src: 'https://source.unsplash.com/96DW4Pow3qI/725x425',
    alt: 'Students at sunset',
  }}
  paragraph={"At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}
  paragraph={"Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat."}  
  />
);
