import React from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import TwitterIcon from '../../../01-atoms/image/icons/TwitterIcon.component';
import FacebookIcon from '../../../01-atoms/image/icons/FacebookIcon.component';
import InstagramIcon from '../../../01-atoms/image/icons/InstagramIcon.component';
import { menuItemPropType } from '../MenuItem.component';

const SocialMenu = () => (
  <ul className="social-menu">
    <li className="social-menu__item">
      <a className="social-menu__link" href="#">
        <TwitterIcon block="social-menu" />
        <span class="social-menu__text">Twitter</span>
      </a>
    </li>
    <li className="social-menu__item">
      <a className="social-menu__link" href="#">
        <FacebookIcon block="social-menu" />
        <span class="social-menu__text">Facebook</span>
      </a>
    </li>
    <li className="social-menu__item">
      <a className="social-menu__link" href="#">
        <InstagramIcon block="social-menu" />
        <span class="social-menu__text">Instagram</span>
      </a>
    </li>
  </ul>
);

export default SocialMenu;
