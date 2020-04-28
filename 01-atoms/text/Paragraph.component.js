import React from 'react';
import PropTypes from 'prop-types';
import withModifiers from '../../_utils/withModifiers';

const Paragraph = ({ children, modifiers }) => {
  return <p className={withModifiers('paragraph')(modifiers)}>{children}</p>;
};

Paragraph.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
};

export default Paragraph;
