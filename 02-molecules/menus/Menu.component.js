import React from 'react';
import PropTypes, { arrayOf, array } from 'prop-types';
import MenuItem, { menuItemPropType } from '../../02-molecules/menus/MenuItem.component';
import bem from '../../_utils/bem';

const Menu = ({block = 'menu', element, modifiers = [], level, items}) => {
  const mods = [].concat(
    modifiers,
    level ? ['sub', `sub-${level}`] : []
  );

  return (
    <ul className={bem(block, element, mods)}>
      { items.map(({title, url, below}, id) => (
        <MenuItem
          key={id}
          block={block}
          title={title}
          url={url}
          sublinks={below}
          modifiers={mods}
        />
      ))}
    </ul>
  );
}

Menu.propTypes = {
  block: PropTypes.string,
  modifiers: arrayOf(PropTypes.string),
  level: PropTypes.number,
  items: arrayOf({
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    below: arrayOf(PropTypes.shape(menuItemPropType))
  })
}

export default Menu;
