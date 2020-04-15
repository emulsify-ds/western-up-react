/**
 * @file Button.component.js
 * Exports a button component.
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Component that renders a button with a click handler.
 */
const Button = (props) => {
  const { onClick, children, modifiers } = props;

  let classNames = 'button';

  if (modifiers) {
    classNames += modifiers.map((modifier) => ' button--' + modifier);
  }
  return (
    <button
      type="button"
      className={classNames}
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
};

Button.defaultProps = {
  children: null,
  onClick: () => {},
};

export default Button;
