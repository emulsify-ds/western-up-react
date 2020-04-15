import React from 'react';
import grayscale from './colors-grayscale.js';
import branding from './colors-branding.js';

/**
 * Storybook Definition.
 */
export default { title: 'Base/Colors' };

const grayscaleItems = grayscale.map((item) => (
  <li className="sg-colors__list" key={item}>
    <div className={`sg-colors__color sg-colors__color--${item}`}></div>
    <div className="sg-info">
      <code>{item}</code>
    </div>
  </li>
));

const brandingItems = branding.map((item) => (
  <li className="sg-colors__list" key={item}>
    <div className={`sg-colors__color sg-colors__color--${item}`}></div>
    <div className="sg-info">
      <code>{item}</code>
    </div>
  </li>
));

export const Grayscale = () => <ul className="sg-colors">{grayscaleItems}</ul>;
export const Branding = () => <ul className="sg-colors">{brandingItems}</ul>;
