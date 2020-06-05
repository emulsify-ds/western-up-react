import React from 'react';
import PropTypes from 'prop-types';
import bem from '../../_utils/bem';

const Link = ({
  children,
  block = 'link',
  element,
  modifiers,
  url,
  target,
  title,
}) => {
  return (
    <a
      href={url}
      target={target}
      title={title}
      className={bem(block, element, modifiers)}
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
