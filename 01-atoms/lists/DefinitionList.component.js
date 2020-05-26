import React from 'react';
import PropTypes from 'prop-types';
import DefinitionListItem, { DefinitionListItemType } from './DefinitionListItem.component';
import bem from '../../_utils/bem';

const DefinitionList = ({block = 'dl', modifiers, items}) => (
  <dl className={bem(block, null, modifiers)}>
    {items.map(({term, definition}, index) => (
      <DefinitionListItem key={index} term={term} definition={definition} />
    ))}
  </dl>
);

DefinitionList.propTypes = {
  block: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  items: PropTypes.arrayOf(PropTypes.shape(DefinitionListItemType)).isRequired,
};

export default DefinitionList;
