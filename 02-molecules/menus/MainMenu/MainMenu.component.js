import React, { useState } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import Menu from '../Menu.component';
import MenuIcon from '../../../01-atoms/images/icons/MenuIcon.component';
import { menuItemPropType } from '../MenuItem.component';
import bem from '../../../_utils/bem';

const MainMenu = ({ items }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => setOpen(!isOpen);
  const toggleModifiers = isOpen ? ['open'] : [];

  return (
    <nav>
      <a
        id="toggle-expand"
        className={bem('toggle-expand', '', toggleModifiers)}
        onClick={toggleMenu}
      >
        <span className={bem('toggle-expand', 'open')}>
          <MenuIcon block="toggle-expand" element="icon" />
          <span className={bem('toggle-expand', 'text')}>Menu</span>
        </span>
        <span className={bem('toggle-expand', 'close')}>
          <span className={bem('toggle-expand', 'text')}>Close</span>
        </span>
      </a>
      <div id="main-nav" className={bem('main-nav', '', toggleModifiers)}>
        <Menu block="main-menu" items={items} />
      </div>
    </nav>
  );
};

MainMenu.propTypes = {
  items: arrayOf(PropTypes.shape(menuItemPropType)),
};

export default MainMenu;
