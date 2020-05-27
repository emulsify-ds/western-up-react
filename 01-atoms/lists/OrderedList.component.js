import React from 'react';
import PropTypes from 'prop-types';
import ListItem, { ListItemType } from './ListItem.component';
import bem from '../../_utils/bem';

const OrderedList = ({
  block = 'ol',
  element = 'item',
  modifiers = [],
  items,
}) => (
  <ol className={bem(block, null, modifiers)}>
    {items.map(({ content, label }, index) => (
      <ListItem
        key={index}
        block={block}
        element={element}
        modifiers={modifiers}
        label={label}
      >
        {content}
      </ListItem>
    ))}
  </ol>
);

OrderedList.propTypes = {
  block: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape(ListItemType)).isRequired,
};

export default OrderedList;
