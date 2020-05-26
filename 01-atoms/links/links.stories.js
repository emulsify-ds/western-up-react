import React from 'react';

import Link from './Link.component';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Link' };

export const link = () => (
  <Link 
    children="This is my link text" 
    url="https://github.com/emulsify-ds/emulsify-drupal"
    target="_blank"
    title="This is my title text" 
  />
);
