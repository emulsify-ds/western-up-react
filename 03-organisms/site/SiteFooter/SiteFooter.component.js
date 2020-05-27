import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import InlineMenu from '../../../02-molecules/menus/InlineMenu/InlineMenu.component';
import SocialMenu from '../../../02-molecules/menus/SocialMenu/SocialMenu.component';
import { menuItemPropType } from '../../../02-molecules/menus/MenuItem.component';
import bem from '../../../_utils/bem';

const SiteFooter = ({ items }) => {
  const block = 'footer';
  return (
    <footer className={bem(block)}>
      <div className={bem(block, 'inner')}>
        <div className={bem(block, 'social')}>
          <SocialMenu />
        </div>
        <div className={bem(block, 'menu')}>
          <InlineMenu items={items} />
        </div>
      </div>
    </footer>
  );
};

SiteFooter.propTypes = {
  items: arrayOf(PropTypes.shape(menuItemPropType)),
};

export default SiteFooter;
