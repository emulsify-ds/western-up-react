import React from 'react';
import bem from '../../../_utils/bem';
import PropTypes from 'prop-types';

const TwitterIcon = ({ block, element = 'icon', modifiers = [] }) => (
  <svg
    className={bem(block, element, modifiers)}
    viewBox="0 0 26 28"
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="28"
  >
    <path d="M25.312 6.375a10.85 10.85 0 01-2.531 2.609c.016.219.016.438.016.656 0 6.672-5.078 14.359-14.359 14.359-2.859 0-5.516-.828-7.75-2.266.406.047.797.063 1.219.063 2.359 0 4.531-.797 6.266-2.156a5.056 5.056 0 01-4.719-3.5c.313.047.625.078.953.078.453 0 .906-.063 1.328-.172a5.048 5.048 0 01-4.047-4.953v-.063a5.093 5.093 0 002.281.641 5.044 5.044 0 01-2.25-4.203c0-.938.25-1.797.688-2.547a14.344 14.344 0 0010.406 5.281 5.708 5.708 0 01-.125-1.156 5.045 5.045 0 015.047-5.047 5.03 5.03 0 013.687 1.594 9.943 9.943 0 003.203-1.219 5.032 5.032 0 01-2.219 2.781c1.016-.109 2-.391 2.906-.781z" />
  </svg>
);

TwitterIcon.prototype = {
  block: PropTypes.string,
  element: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
};

export default TwitterIcon;
