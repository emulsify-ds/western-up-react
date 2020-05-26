import React from 'react';
import MainMenu from './MainMenu.component';
import { items } from './MainMenu.data';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const main = () => <MainMenu items={items} />;
