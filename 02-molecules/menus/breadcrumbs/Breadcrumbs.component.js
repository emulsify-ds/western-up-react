import React from 'react';
import PropTypes from 'prop-types';
import bem from '../../../_utils/bem'

const blockName = 'breadcrumb';

const Breadcrumbs = ({items}) => (
  <nav
    className={ bem(blockName, 'wrapper') }
    role='navigation'
    aria-labelledby='system-breadcrumb'
  >
    <h2 className={ bem('visually-hidden') } id='system-breadcrumb'>
      Breadcrumb
    </h2>
    <ol className={ bem(blockName) }>
      { items.map(item => (
        <li className={ bem(blockName, 'item') }>
          { item.url ? (
            <a className={ bem(blockName, 'link') } href={ item.url }>
              { item.text }
            </a>
          ) : (
            item.text
          )}
        </li>
      ))}
    </ol>
  </nav>
);

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf({
    url: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
};

export default Breadcrumbs;
