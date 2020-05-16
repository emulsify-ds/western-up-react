import React from 'react';
import PropTypes from 'prop-types';
import ListItem, { ListItemType } from './ListItem.component';
import bem from '../../_utils/bem';

const UnorderedList = ({block = 'ul', modifiers, items}) => (
  <ol className={bem(block, null, modifiers)}>
    {items.map(({content, label}, index) => (
      <ListItem key={index} content={content} label={label} />
    ))}
  </ol>
);

UnorderedList.propTypes = {
  block: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(ListItemType).isRequired,
};

export default UnorderedList;
