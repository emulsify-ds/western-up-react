import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../01-atoms/text/Heading.component';
import Button from '../../01-atoms/buttons/Button.component';
import bem from '../../_utils/bem';

const Cta = ({
  block = 'cta',
  element,
  modifiers,
  additionalClasses,
  heading,
  buttonModifiers,
  buttonText,
}) => (
  <div className={bem(block, element, modifiers, additionalClasses)}>
    <Heading level="2" block={block} element="heading">
      {heading}
    </Heading>
    <Button block={block} element="button">
      {buttonText}
    </Button>
  </div>
);

Cta.propTypes = {
  ctaModifiers: PropTypes.arrayOf(PropTypes.string),
  heading: PropTypes.string.isRequired,
  buttonModifiers: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string.isRequired,
};

export default Cta;
