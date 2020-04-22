import React from 'react';
import grayscale from './colors-grayscale.js';
import branding from './colors-branding.js';

/**
 * Storybook Definition.
 */
export default { title: 'Base/Colors' };

const Colors = ({ palette }) => (
  <ul className="sg-colors">
    {palette.map((color) => (
      <li className="sg-colors__list" key={color}>
        <div className={`sg-colors__color sg-colors__color--${color}`}></div>
        <div className="sg-info">
          <code>{color}</code>
        </div>
      </li>
    ))}
  </ul>
);

export const Grayscale = () => <Colors palette={grayscale} />;
export const Branding = () => <Colors palette={branding} />;
