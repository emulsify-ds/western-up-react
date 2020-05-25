import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import Breadcrumbs from '../../../02-molecules/menus/breadcrumbs/Breadcrumbs.component'
import { menuItemPropType } from '../../../02-molecules/menus/MenuItem.component';
import bem from '../../../_utils/bem';

const SiteHeader = ({breadcrumbs}) => {
  const block = 'header';
  return (
    <header className={bem(block)}>
      <div className={bem(block, 'primary')}>
        <div className={bem(block, 'branding')}>
          LOGO
        </div>
        <div className={bem(block, 'menu')}>
          main menu
        </div>
      </div>
      <div className={bem(block, 'secondary')}>
        <Breadcrumbs items={breadcrumbs} />
      </div>
    </header>
  );
}

SiteHeader.propTypes = {
  breadcrumbs: PropTypes.arrayOf({
    url: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
}

export default SiteHeader;
