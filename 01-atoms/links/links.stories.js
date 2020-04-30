import React from 'react';

import Link from './Link.component';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Link' };

export const link = () => (
  <Link 
    children="This is my link text" 
    linkURL="https://github.com/emulsify-ds/emulsify-drupal"
    linkTarget="_blank"
    linkTitleText="This is my title text" 
  />
);