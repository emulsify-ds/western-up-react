import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../01-atoms/text/Heading.component';
import withModifiers from '../../_utils/withModifiers';

const PageTitle = ({ PageTitleModifiers, heading }) => (
  <div className={withModifiers('page-title__wrapper')(PageTitleModifiers)}>
    <Header level="1" baseClass="page-title">
      {heading}
    </Header>
  </div>
);

PageTitle.propTypes = {
  PageTitleModifiers: PropTypes.arrayOf(PropTypes.string),
  heading: PropTypes.string.isRequired,
};

export default PageTitle;
