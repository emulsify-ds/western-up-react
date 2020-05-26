import React from 'react';

import Breadcrumbs from './Breadcrumbs.component';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Menus' };

export const breadcrumbs = () => (
  <Breadcrumbs
    items={[
      { text: 'Home', url: '#' },
      { text: 'Parent ', url: '#' },
      { text: 'Current Page' },
    ]}
  />
);
