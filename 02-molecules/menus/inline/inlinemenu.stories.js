import React from 'react';
import InlineMenu from './InlineMenu.component';
import { items } from './InlineMenu.data.json';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const inline = () => (
  <InlineMenu
    items={items}
  />
);
