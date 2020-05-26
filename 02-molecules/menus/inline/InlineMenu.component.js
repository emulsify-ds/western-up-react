import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import Menu from '../Menu.component';
import { menuItemPropType } from '../MenuItem.component';

const InlineMenu = ({items}) => (
  <Menu
    block='inline-menu'
    items={items}
  />
);

InlineMenu.propTypes = {
  items: arrayOf(PropTypes.shape(menuItemPropType))
}

export default InlineMenu;
