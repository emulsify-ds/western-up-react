import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import UnorderedList from '../../01-atoms/lists/UnorderedList.component';
import bem from '../../../_utils/bem'

const Menu = ({block = 'temp', modifiers = [], items}) => (
  <UnorderedList
    className={bem(block, 'menu', modifiers)}
    items={items}
  />
);

Menu.PropTypes = {
  block: PropTypes.string,
  modifiers: arrayOf(PropTypes.string),
  items: arrayOf({
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
  })
}

export default Menu;
