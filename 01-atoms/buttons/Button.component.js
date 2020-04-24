/**
 * @file Button.component.js
 * Exports a button component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withModifiers from '../../_utils/withModifiers';

/**
 * Component that renders a button with a click handler.
 */
const Button = ({ onClick, children, modifiers }) => {
  return (
    <button
      type="button"
      className={withModifiers('button')(modifiers)}
      aria-label="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  modifiers: PropTypes.arrayOf(PropTypes.string),
};

Button.defaultProps = {
  children: null,
  onClick: () => {},
};

export default Button;