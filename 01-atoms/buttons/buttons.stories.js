import React from 'react';

import Button from './Button.component';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Button' };

export const All = () => (
  <>
    <Button>Button Default</Button>
    <br />
    <Button modifiers={['alt']}>Button Alt</Button>
    <br />
    <Button modifiers={['alt-2']}>Button Alt 2</Button>
  </>
);
export const Default = () => <Button>Button Default</Button>;
export const Alt = () => <Button modifiers={['alt']}>Button Alt</Button>;
export const Alt2 = () => <Button modifiers={['alt-2']}>Button Alt 2</Button>;
