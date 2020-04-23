import React from 'react';
import PropTypes from 'prop-types';
import withModifiers from '../../_utils/withModifiers';

const Heading = ({ children, modifiers, level = '1' }) => {
  const Tag = `h${level}`;
  return <Tag className={withModifiers('heading')(modifiers)}>{children}</Tag>;
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
};

export default Heading;
