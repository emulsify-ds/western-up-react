import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../01-atoms/text/Heading.component';
import Button from '../../01-atoms/buttons/Button.component';
import withModifiers from '../../_utils/withModifiers';

const Cta = ({ cta_modifiers, heading, button_modifiers, button_text }) => (
  <div className={withModifiers('cta')(cta_modifiers)}>
    <Header level="2" base_class="cta__heading">
      {heading}
    </Header>
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
