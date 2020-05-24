import React from 'react';
import PropTypes from 'prop-types';

const Pager = () => {
  return (
    <nav className="pager" role="navigation" aria-labelledby="pagination-heading">
      <h4 id="pagination-heading" className="visually-hidden">Pagination</h4>
      <ul className="pager__items js-pager__items">
        <li className="pager__item pager__item--prev">
          <a className="pager__link pager__link--prev" href="" title="Go to previous page" rel="prev">
            <span className="visually-hidden">Previous page</span>
            <span aria-hidden="true">‹ Previous</span>
          </a>
        </li>
        <li className="pager__item pager__item--ellipsis" role="presentation">…</li>
        <li className="pager__item ">
          <a className="pager__link " href="#" title="Go to page @key">
            <span className="visually-hidden">Page </span>3
          </a>
        </li>
        <li className="pager__item ">
          <a className="pager__link " href="#" title="Go to page @key">
            <span className="visually-hidden">Page </span>4
          </a>
        </li>
        <li className="pager__item ">
          <a className="pager__link " href="#" title="Go to page @key">
            <span className="visually-hidden">Page </span>5
          </a>
        </li>
        <li className="pager__item ">
          <a className="pager__link " href="#" title="Go to page @key">
            <span className="visually-hidden">Page </span>6
          </a>
        </li>
        <li className="pager__item pager__item--ellipsis" role="presentation">…</li>
        <li className="pager__item pager__item--next">
          <a className="pager__link pager__link--next" href="" title="Go to next page" rel="next">
            <span className="visually-hidden">Next page</span>
            <span aria-hidden="true">Next ›</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pager;
