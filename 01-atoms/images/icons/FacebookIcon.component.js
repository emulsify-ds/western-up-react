import React from 'react';
import bem from '../../../_utils/bem';
import PropTypes from 'prop-types';

const FacebookIcon = ({ block, element = 'icon', modifiers = [] }) => (
  <svg
    className={bem(block, element, modifiers)}
    viewBox="0 0 264 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229" />
  </svg>
);

FacebookIcon.prototype = {
  block: PropTypes.string,
  element: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
};

export default FacebookIcon;
