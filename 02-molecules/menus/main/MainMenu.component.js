import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import Menu from '../Menu.component';
import { menuItemPropType } from '../MenuItem.component';

const MainMenu = ({items}) => (
  <nav >
    <a href="#" id="toggle-expand" className="toggle-expand">
      <span className="toggle-expand__open">
        Open Icon
        {/* {% include "@atoms/images/icons/_icon.twig" with {
          icon_base_class: "icon",
          icon_blockname: "toggle-expand",
          icon_name: "menu",
        } %} */}
        <span className="toggle-expand__text">Menu</span>
      </span>
      <span className="toggle-expand__close">
        <span className="toggle-expand__text">Close</span>
      </span>
    </a>
    <div id="main-nav" className="main-nav">
      <Menu
        block='main-menu'
        items={items}
      />
    </div>
  </nav>
);

MainMenu.propTypes = {
  items: arrayOf(PropTypes.shape(menuItemPropType))
}

export default MainMenu;
