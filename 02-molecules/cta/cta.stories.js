import React from 'react';

import Cta from './Cta.component';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cta' };

export const cta = () => (
  <Cta heading="This is a reason to act" button_text="Click here" />
);
export const ctaHome = () => (
  <Cta
    heading="World Class Library System"
    button_text="Visit in Virtual Reality"
    cta_modifiers={['home']}
  />
);
