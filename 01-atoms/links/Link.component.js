import React from 'react';
import PropTypes from 'prop-types';
import withModifiers from '../../_utils/withModifiers';

const Link = ({children, modifiers, linkURL, linkTarget, linkTitleText }) => {
  return (
    <a
      href={linkURL}
      target={linkTarget}
      title={linkTitleText}
      className={withModifiers('link')(modifiers)}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  linkURL: PropTypes.string.isRequired,
  linkTarget: PropTypes.string,
  linkTitleText: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
};

export default Link;
