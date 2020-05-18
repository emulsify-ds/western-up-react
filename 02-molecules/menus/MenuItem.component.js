import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import ListItem from '../../01-atoms/lists/ListItem.component';
import bem from '../../../_utils/bem'

const MenuItem = ({block = 'temp', modifiers = [], items}) => (
  <ListItem
    className={bem(block, 'idontknow', modifiers)}
    items={items}
  />
);

MenuItem.PropTypes = {
  block: PropTypes.string,
  modifiers: arrayOf(PropTypes.string),
  items: arrayOf({
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
  })
}

export default MenuItem;
