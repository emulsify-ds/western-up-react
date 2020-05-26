import React from 'react';
import PropTypes from 'prop-types';
import withModifiers from '../../_utils/withModifiers';

const Link = ({ children, modifiers, url, target, title }) => {
  return (
    <a
      href={url}
      target={target}
      title={title}
      className={withModifiers('link')(modifiers)}
    >
      {children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.node,
  url: PropTypes.string.isRequired,
  target: PropTypes.string,
  title: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
};

export default Link;
