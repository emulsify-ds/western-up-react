import React from 'react';
import Layout from './Layout.component';
import { items as menu } from '../../02-molecules/menus/MainMenu/MainMenu.data.json';
import { items as footerItems } from '../../02-molecules/menus/InlineMenu/InlineMenu.data.json';
import Placeholder from '../Placeholder/Placeholder.component';

/**
 * Storybook Definition.
 */
export default { title: 'Template/Layout' };

export const fullwidth = () => (
  <Layout
    menu={menu}
    footerItems={footerItems}
    content={<Placeholder placeholder="Primary Content" />}
  />
);
export const withSidebar = () => (
  <Layout
    menu={menu}
    footerItems={footerItems}
    hasSidebar={1}
    content={<Placeholder placeholder="Primary Content" />}
    sidebar={<Placeholder placeholder="Secondary Content" />}
  />
);
