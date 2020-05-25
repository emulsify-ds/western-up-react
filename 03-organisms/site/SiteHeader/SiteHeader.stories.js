import React from 'react';
import SiteHeader from './SiteHeader.component';
import { items as breadcrumbs } from '../../../02-molecules/menus/breadcrumbs/breadcrumbs.data.json';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Site' };

export const header = () => (
  <SiteHeader
    breadcrumbs={breadcrumbs}
  />
);
