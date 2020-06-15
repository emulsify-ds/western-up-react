import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import PageTitle from '../../02-molecules/PageTitle/PageTitle.component';
import SiteHeader from '../../03-organisms/site/SiteHeader/SiteHeader.component';
import SiteFooter from '../../03-organisms/site/SiteFooter/SiteFooter.component';
import Placeholder from '../../04-templates/Placeholder/Placeholder.component';
import bem from '../../_utils/bem';
import { menuItemPropType } from '../../02-molecules/menus/MenuItem.component';
import Paragraph from '../../01-atoms/text/Paragraph.component';
import Heading from '../../01-atoms/text/Heading.component';
import Image from '../../01-atoms/images/Image/Image.component';

const Article = ({
  mainBlock = 'main-content',
  mainModifiers = [],
  articleModifiers = [],
  mainContentModifiers = [],
  breadcrumbs,
  menu,
  title,
  subtitle,
  image,
  paragraph,
  footerItems,
  hasSidebar,
}) => {
  if (hasSidebar) {
    mainModifiers.push('with-sidebar');
    mainContentModifiers.push('with-sidebar');
  }

  return (
    <div className={bem('article-container', articleModifiers)}>
      <SiteHeader breadcrumbs={breadcrumbs} menu={menu} />
      {/* //page_system */}
      <div className={bem('main', '', mainModifiers)}>
        <a id="main-content" tabIndex="-1"></a>
        <PageTitle>{title}</PageTitle>
        {hasSidebar && (
          <aside className="main-sidebar" role="complementary">
            <Placeholder placeholder="Secondary Content" />
          </aside>
        )}
        <main role="main" className={bem(mainBlock, '', mainContentModifiers)}>
          <Heading level = '2'>{subtitle}</Heading>
          <Image>{image}</Image>
          <Paragraph>{paragraph}</Paragraph>
        </main>
      </div>
      <SiteFooter items={footerItems} />
    </div>
  );
};

Article.propTypes = {
  mainBlock: PropTypes.string,
  mainModifiers: PropTypes.arrayOf(PropTypes.string),
  articleModifiers: PropTypes.arrayOf(PropTypes.string),
  mainContentModifiers: PropTypes.arrayOf(PropTypes.string),
  breadcrumbs: PropTypes.arrayOf({
    url: PropTypes.string,
    text: PropTypes.string.isRequired,
  }),
  menu: PropTypes.arrayOf(PropTypes.shape(menuItemPropType)),
  title: PropTypes.element,
  footerItems: arrayOf(PropTypes.shape(menuItemPropType)),
  hasSidebar: PropTypes.bool,
};

export default Article;
