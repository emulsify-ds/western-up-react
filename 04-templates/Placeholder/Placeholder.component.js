import React from 'react';
import PropTypes from 'prop-types';
import bem from '../../_utils/bem';

const Placeholder = ({placeholder = 'Place holder'}) => {
  const base = 'place-holder';
  return (
    <section className={bem(base)}>
      <div className={bem(base, 'content')}>
        { placeholder }
      </div>
    </section>
  );
}

Placeholder.prototype = {
  placeholder: PropTypes.string
}

export default Placeholder;
