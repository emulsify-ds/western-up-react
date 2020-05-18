import React from 'react';
import PropTypes from 'prop-types';

const MainMenu = () => (
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
      {/* {% include "@molecules/menus/_menu.twig" with {
        menu_class: "main-menu",
        items: menu_items,
      } %} */}
      Menu Here
    </div>
  </nav>
);

export default MainMenu;
