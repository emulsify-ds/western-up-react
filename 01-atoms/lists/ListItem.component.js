import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({label, content}) => (
  <li className='list-item'>
    {label && <strong>{label} </strong>}
    {content}
  </li>
);

export const ListItemType = PropTypes.shape({
  content: PropTypes.string.isRequired,
  label: PropTypes.string,
});

ListItem.propTypes = ListItemType;

export default ListItem;
