/**
 * @file Button.component.js
 * Exports a button component.
 */

import React from 'react';
import PropTypes from 'prop-types';
import bem from '../../_utils/bem';

/**
 * Component that renders a button with a click handler.
 */
const Button = ({
  onClick,
  children,
  block = 'button',
  element,
  modifiers,
}) => {
  return (
    <button
      type="button"
      className={bem(block, element, modifiers)}
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
  block: PropTypes.string,
  element: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
};

Button.defaultProps = {
  children: null,
  onClick: () => {},
};

export default Button;
