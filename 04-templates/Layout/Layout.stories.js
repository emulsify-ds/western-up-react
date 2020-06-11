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
  <Layout menu={menu} footerItems={footerItems}>
    <Placeholder placeholder="Primary Content" />
  </Layout>
);
export const withSidebar = () => (
  <Layout
    menu={menu}
    footerItems={footerItems}
    hasSidebar={1}
    sidebar={<Placeholder placeholder="Secondary Content" />}
  >
    <Placeholder placeholder="Primary Content" />
  </Layout>
);
