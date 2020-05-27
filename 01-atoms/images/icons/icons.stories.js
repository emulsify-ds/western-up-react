import React from 'react';
import FacebookIcon from './FacebookIcon.component';
import InstagramIcon from './InstagramIcon.component';
import MenuIcon from './MenuIcon.component';
import TwitterIcon from './TwitterIcon.component';
import bem from '../../../_utils/bem';

/**
 * Storybook Definition.
 */
export default { title: 'Atoms/Image' };

export const icons = () => (
  <div className="icons-demo" id="icons">
    {demoIcon(<FacebookIcon />, 'facebook')}
    {demoIcon(<InstagramIcon />, 'instagram')}
    {demoIcon(<MenuIcon />, 'menu')}
    {demoIcon(<TwitterIcon />, 'twitter')}
  </div>
);

const demoIcon = (WrappedComponent, name) => (
  <div className={bem('icons-demo', 'item')}>
    {WrappedComponent}
    <pre>{name}</pre>
  </div>
);
