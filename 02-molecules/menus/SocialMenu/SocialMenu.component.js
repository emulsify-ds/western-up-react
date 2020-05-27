import React from 'react';
import TwitterIcon from '../../../01-atoms/images/icons/TwitterIcon.component';
import FacebookIcon from '../../../01-atoms/images/icons/FacebookIcon.component';
import InstagramIcon from '../../../01-atoms/images/icons/InstagramIcon.component';
import bem from '../../../_utils/bem';

const SocialMenu = () => {
  const block = 'social-menu';
  return (
    <ul className={bem(block)}>
      <li className={bem(block, 'item')}>
        <a className={bem(block, 'link')} href="#">
          <TwitterIcon block={block} />
          <span className={bem(block, 'text')}>Twitter</span>
        </a>
      </li>
      <li className={bem(block, 'item')}>
        <a className={bem(block, 'link')} href="#">
          <FacebookIcon block={block} />
          <span className={bem(block, 'text')}>Facebook</span>
        </a>
      </li>
      <li className={bem(block, 'item')}>
        <a className={bem(block, 'link')} href="#">
          <InstagramIcon block={block} />
          <span className={bem(block, 'text')}>Instagram</span>
        </a>
      </li>
    </ul>
  );
};

export default SocialMenu;
