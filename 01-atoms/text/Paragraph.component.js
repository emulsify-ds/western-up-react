import React from 'react';
import PropTypes from 'prop-types';
import bem from '../../_utils/bem';

const Paragraph = ({ children, block = 'paragraph', element, modifiers }) => {
  return <p className={bem(block, element, modifiers)}>{children}</p>;
};

Paragraph.propTypes = {
  modifiers: PropTypes.arrayOf(PropTypes.string),
};

export default Paragraph;
