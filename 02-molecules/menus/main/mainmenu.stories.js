import React from 'react';
import MainMenu from './MainMenu.component';
import { data } from './mainmenu.data';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const mainMenu = () => (
  <MainMenu
    items={data}
  />
);
