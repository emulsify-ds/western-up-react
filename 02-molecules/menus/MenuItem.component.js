import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import Menu from './Menu.component';
import bem from '../../_utils/bem';

const MenuItem = ({ title, url, sublinks, block = 'menu', modifiers = []}) => {
  const mods = [].concat(
    modifiers,
    sublinks ? ['with-sub'] : []
  );

  return (
    <li className={bem(block, 'item', mods)}>
      <a
        className={bem(block, 'link', mods)}
        href={url}
      >
        { title }
      </a>
      { sublinks && (
        <>
          <span className="expand-sub"></span>
          <Menu
            block={block}
            level={1}
            items={sublinks}
          />
        </>
      )}
    </li>
  );
}

// Defines the menu item shape and then recursively adds the shape to itself as
// an array of sublinks. Export this shape for other components to use.
const menuItemShape = {
  title: PropTypes.string,
  url: PropTypes.string,
  block: PropTypes.string,
  modifiers: arrayOf(PropTypes.string),
}
menuItemShape.sublinks = PropTypes.arrayOf(PropTypes.shape(menuItemShape));
export const menuItemPropType = menuItemShape;

MenuItem.propTypes = PropTypes.shape(menuItemPropType);

export default MenuItem;
