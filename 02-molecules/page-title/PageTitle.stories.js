import React from 'react';

import PageTitle from './PageTitle.component';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Page Title' };

export const pageTitle = () => (
  <PageTitle heading="This is a PageTitle" />
);
