import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../01-atoms/text/Heading.component';
import bem from '../../_utils/bem';

const PageTitle = ({ modifiers, children }) => (
  <div className={bem('page-title', 'wrapper', modifiers)}>
    <Header level={1} block="page-title">
      {children}
    </Header>
  </div>
);

PageTitle.propTypes = {
  Modifiers: PropTypes.arrayOf(PropTypes.string),
  children: PropTypes.element,
};

export default PageTitle;
