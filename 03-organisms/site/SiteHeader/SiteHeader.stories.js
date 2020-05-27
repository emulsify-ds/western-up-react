import React from 'react';
import SiteHeader from './SiteHeader.component';
import { items as breadcrumbs } from '../../../02-molecules/menus/Breadcrumbs/Breadcrumbs.data.json';
import { items as menu } from '../../../02-molecules/menus/MainMenu/MainMenu.data.json';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Site' };

export const header = () => (
  <SiteHeader breadcrumbs={breadcrumbs} menu={menu} />
);
