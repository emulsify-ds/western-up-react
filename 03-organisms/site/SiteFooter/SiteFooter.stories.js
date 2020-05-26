import React from 'react';
import SiteFooter from './SiteFooter.component';
import { items } from '../../../02-molecules/menus/inline/InlineMenu.data.json';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Site' };

export const footer = () => <SiteFooter items={items} />;
