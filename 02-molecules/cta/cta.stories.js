import React from 'react';

import Cta from './Cta.component';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Cta' };

export const cta = () => (
  <Cta heading="This is a reason to act" buttonText="Click here" />
);
export const ctaHome = () => (
  <Cta
    heading="World Class Library System"
    buttonText="Visit in Virtual Reality"
    ctaModifiers={['home']}
  />
);
