import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import Link from '../../../01-atoms/links/Link.component';
import Logo from '../../../01-atoms/image/Logo/Logo.component';
import Breadcrumbs from '../../../02-molecules/menus/breadcrumbs/Breadcrumbs.component';
import MainMenu from '../../../02-molecules/menus/main/MainMenu.component';
import { menuItemPropType } from '../../../02-molecules/menus/MenuItem.component';
import bem from '../../../_utils/bem';

const SiteHeader = ({ breadcrumbs, menu }) => {
  const block = 'header';
  return (
    <header className={bem(block)}>
      <div className={bem(block, 'primary')}>
        <div className={bem(block, 'branding')}>
          <Link modifiers={['logo-link']} href="/">
            <Logo block="logo" element="image" />
          </Link>
        </div>
        <div className={bem(block, 'menu')}>
          <MainMenu items={menu} />
        </div>
      </div>
      <div className={bem(block, 'secondary')}>
        <Breadcrumbs items={breadcrumbs} />
      </div>
    </header>
  );
};

SiteHeader.propTypes = {
  breadcrumbs: PropTypes.arrayOf({
    url: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
  menu: PropTypes.arrayOf(PropTypes.shape(menuItemPropType)),
};

export default SiteHeader;
