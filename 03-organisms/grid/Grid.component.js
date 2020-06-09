import React from 'react';
import PropTypes from 'prop-types';
import bem from '../../_utils/bem';
import Heading from '../../01-atoms/text/Heading.component';

const Grid = ({
  gridLabel,
  children,
  block = 'grid',
  element,
  gridType,
  pageLayoutModifier = 'contained',
  modifiers = [],
}) => {
  const mods = []
    .concat(modifiers, gridType, pageLayoutModifier)
    .filter((item) => item);
  return (
    <>
      <Heading level={2}>{gridLabel}</Heading>
      <div className={bem(block, element, mods)}>{children}</div>
    </>
  );
};

Grid.propTypes = {
  block: PropTypes.string.isRequired,
  element: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  gridLabel: PropTypes.string,
  children: PropTypes.element,
};

export default Grid;
