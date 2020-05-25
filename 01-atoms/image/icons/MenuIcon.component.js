import React from 'react';
import bem from '../../../_utils/bem';
import PropTypes from 'prop-types';

const MenuIcon = ({block, element = 'icon', modifiers = []}) => (
  <svg
    className={bem(block, element, modifiers)}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
  >
    <path d="M2 6h28v6H2zm0 8h28v6H2zm0 8h28v6H2z"/>
  </svg>
);

MenuIcon.prototype = {
  block: PropTypes.string,
  element: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string)
}

export default MenuIcon;
