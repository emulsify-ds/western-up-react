import React from 'react';
import PropTypes from 'prop-types';
import bem from '../../_utils/bem';

const Heading = ({
  block = 'heading',
  element = '',
  modifiers,
  children,
  level = '1',
}) => {
  const Tag = `h${level}`;
  return <Tag className={bem(block, element, modifiers)}>{children}</Tag>;
};

Heading.propTypes = {
  block: PropTypes.string,
  element: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.element,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Heading;
