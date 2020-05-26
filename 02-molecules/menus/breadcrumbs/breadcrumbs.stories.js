import React from 'react';
import Breadcrumbs from './Breadcrumbs.component';
import { items } from './Breadcrumbs.data.json';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const breadcrumbs = () => <Breadcrumbs items={items} />;
