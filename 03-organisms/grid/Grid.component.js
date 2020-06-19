import React from 'react';
import PropTypes from 'prop-types';
import bem from '../../_utils/bem';
import Heading from '../../01-atoms/text/Heading.component';

const Grid = ({
  gridLabel,
  children,
  block = 'grid',
  element,
  modifiers = [],
  gridType,
  pageLayoutModifier = 'contained',
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
  gridLabel: PropTypes.string,
  children: PropTypes.element,
  block: PropTypes.string.isRequired,
  element: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  gridType: PropTypes.string,
  pageLayoutModifier: PropTypes.string,
};

export default Grid;
