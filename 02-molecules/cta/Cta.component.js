import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../01-atoms/buttons/Button.component';
import withModifiers from '../../_utils/withModifiers';

const Cta = ({ cta_modifiers, heading, button_modifiers, button_text }) => (
  <div className={withModifiers('cta')(cta_modifiers)}>
    <h2 className="cta__heading">{heading}</h2>
    <Button modifiers={button_modifiers}>{button_text}</Button>
  </div>
);

Cta.propTypes = {
  cta_modifiers: PropTypes.arrayOf(PropTypes.string),
  heading: PropTypes.string.isRequired,
  button_modifiers: PropTypes.arrayOf(PropTypes.string),
  button_text: PropTypes.string.isRequired,
};

export default Cta;