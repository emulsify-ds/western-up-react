import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import PageTitle from '../../02-molecules/PageTitle/PageTitle.component';
import SiteHeader from '../../03-organisms/site/SiteHeader/SiteHeader.component';
import SiteFooter from '../../03-organisms/site/SiteFooter/SiteFooter.component';
import bem from '../../_utils/bem';
import { menuItemPropType } from '../../02-molecules/menus/MenuItem.component';

const Layout = ({
  mainBlock = 'main-content',
  mainModifiers = [],
  layoutModifiers = [],
  mainContentModifiers = [],
  breadcrumbs,
  menu,
  title,
  footerItems,
  hasSidebar,
  hero,
  sidebar,
  children,
}) => {
  if (hasSidebar) {
    mainModifiers.push('with-sidebar');
    mainContentModifiers.push('with-sidebar');
  }

  return (
    <div className={bem('layout-container', layoutModifiers)}>
      <SiteHeader breadcrumbs={breadcrumbs} menu={menu} />
      {/* //page_system */}
      <div className={bem('main', '', mainModifiers)}>
        <a id="main-content" tabIndex="-1"></a>
        <PageTitle>{title}</PageTitle>
        {hasSidebar && (
          <aside className="main-sidebar" role="complementary">
            {sidebar}
          </aside>
        )}
        {hero}
        <main role="main" className={bem(mainBlock, '', mainContentModifiers)}>
          {children}
        </main>
      </div>
      <SiteFooter items={footerItems} />
    </div>
  );
};

Layout.propTypes = {
  mainBlock: PropTypes.string,
  mainModifiers: PropTypes.arrayOf(PropTypes.string),
  layoutModifiers: PropTypes.arrayOf(PropTypes.string),
  mainContentModifiers: PropTypes.arrayOf(PropTypes.string),
  breadcrumbs: PropTypes.arrayOf({
    url: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
  menu: PropTypes.arrayOf(PropTypes.shape(menuItemPropType)),
  title: PropTypes.element,
  footerItems: arrayOf(PropTypes.shape(menuItemPropType)),
  hasSidebar: PropTypes.bool,
  hero: PropTypes.element,
  sidebar: PropTypes.element,
  children: PropTypes.element,
};

export default Layout;
