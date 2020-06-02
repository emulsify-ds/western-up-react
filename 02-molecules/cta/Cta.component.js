import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../01-atoms/text/Heading.component';
import Button from '../../01-atoms/buttons/Button.component';
import withModifiers from '../../_utils/withModifiers';

const Cta = ({ ctaModifiers, heading, buttonModifiers, buttonText }) => (
  <div className={withModifiers('cta')(ctaModifiers)}>
    <Heading level="2" baseClass="cta__heading">
      {heading}
    </Heading>
    <Button modifiers={buttonModifiers}>{buttonText}</Button>
  </div>
);

Cta.propTypes = {
  ctaModifiers: PropTypes.arrayOf(PropTypes.string),
  heading: PropTypes.string.isRequired,
  buttonModifiers: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string.isRequired,
};

export default Cta;
