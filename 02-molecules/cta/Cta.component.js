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
    <Button block={block} element="button" modifiers={buttonModifiers}>
      {buttonText}
    </Button>
  </div>
);

Cta.propTypes = {
  block: PropTypes.string,
  element: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
  additionalClasses: PropTypes.arrayOf(PropTypes.string),
  heading: PropTypes.string.isRequired,
  buttonModifiers: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string.isRequired,
};

export default Cta;
