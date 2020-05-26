import React from 'react';
import Button from './Button.component';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Button' };

export const All = () => (
  <>
    <p>
      <Default />
    </p>
    <p>
      <Alt />
    </p>
    <p>
      <Alt2 />
    </p>
  </>
);
export const Default = () => <Button>Button Default</Button>;
export const Alt = () => <Button modifiers={['alt']}>Button Alt</Button>;
export const Alt2 = () => <Button modifiers={['alt-2']}>Button Alt 2</Button>;
