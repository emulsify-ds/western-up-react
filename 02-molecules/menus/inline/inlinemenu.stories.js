import React from 'react';
import InlineMenu from './InlineMenu.component';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const inlineMenu = () => (
  <InlineMenu
    items={[
      { title: 'Test', url: '#' },
      { title: 'Number 2', url: '#' },
      { title: 'Item Number 3', url: '#' },
    ]}
  />
);
