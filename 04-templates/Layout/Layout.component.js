import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../../02-molecules/PageTitle/PageTitle.component';
import SiteHeader from '../../03-organisms/site/SiteHeader/SiteHeader.component';
import SiteFooter from '../../03-organisms/site/SiteFooter/SiteFooter.component';
import Placeholder from '../Placeholder/Placeholder.component';
import bem from '../../_utils/bem';

const Layout = ({
  mainBlock = 'main-content',
  mainModifiers = [],
  layoutModifiers = [],
  mainContentModifiers = [],
  breadcrumbs,
  menu,
  footerItems,
  hasSidebar,
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
        <PageTitle></PageTitle>
        {hasSidebar && (
          <aside className="main-sidebar" role="complementary">
            <Placeholder placeholder="Secondary Content" />
          </aside>
        )}
        <main role="main" className={bem(mainBlock, '', mainContentModifiers)}>
          <Placeholder placeholder="Primary Content" />
        </main>
      </div>
      <SiteFooter items={footerItems} />
    </div>
  );
};

export default Layout;
