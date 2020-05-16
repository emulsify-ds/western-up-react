import React from 'react';
import PropTypes from 'prop-types';

const DefinitionListItem = ({term, definition}) => (
  <>
    <dt className='dl-term'>{term}</dt>
    <dd className='dl-def'>{definition}</dd>
  </>
);

export const DefinitionListItemType = {
  term: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
};

DefinitionListItem.propTypes = DefinitionListItemType;

export default DefinitionListItem;
