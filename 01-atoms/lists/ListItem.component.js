import React from 'react';
import PropTypes from 'prop-types';
import bem from '../../_utils/bem';

const ListItem = ({
  block,
  element = 'list-item',
  modifiers,
  label,
  children,
}) => (
  <li className={bem(block, element, modifiers)}>
    {label && <strong>{label} </strong>}
    {children}
  </li>
);

export const ListItemType = {
  content: PropTypes.string.isRequired,
  label: PropTypes.string,
};

ListItem.propTypes = ListItemType;

export default ListItem;
