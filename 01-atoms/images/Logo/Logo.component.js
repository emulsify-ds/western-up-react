import React from 'react';
import bem from '../../../_utils/bem';
import PropTypes from 'prop-types';

const Logo = ({ block, element = 'icon', modifiers = [] }) => (
  <svg
    className={bem(block, element, modifiers)}
    width="214"
    height="38"
    viewBox="0 0 214 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M35.0312 32.4062H34.4375V28.25C34.4375 27.2852 33.6211 26.4688 32.6562 26.4688H31.4688V15.1875H27.9062V26.4688H24.3438V15.1875H20.7812V26.4688H17.2188V15.1875H13.6562V26.4688H10.0938V15.1875H6.53125V26.4688H5.34375C4.30469 26.4688 3.5625 27.2852 3.5625 28.25V32.4062H2.96875C1.92969 32.4062 1.1875 33.2227 1.1875 34.1875V35.375C1.1875 35.7461 1.41016 35.9688 1.78125 35.9688H36.2188C36.5156 35.9688 36.8125 35.7461 36.8125 35.375V34.1875C36.8125 33.2227 35.9961 32.4062 35.0312 32.4062ZM30.875 32.4062H7.125V30.0312H30.875V32.4062ZM36.2188 8.50781L20.1133 1.75391C19.8164 1.67969 19.2969 1.53125 19 1.53125C18.6289 1.53125 18.1094 1.67969 17.8125 1.75391L1.70703 8.50781C1.41016 8.58203 1.1875 8.95312 1.1875 9.32422V11.3281C1.1875 11.8477 1.55859 12.2188 2.07812 12.2188H3.5625V13.1094C3.5625 13.6289 3.93359 14 4.45312 14H33.5469C33.9922 14 34.4375 13.6289 34.4375 13.1094V12.2188H35.9219C36.3672 12.2188 36.8125 11.8477 36.8125 11.3281V9.32422C36.8125 8.95312 36.5156 8.58203 36.2188 8.50781ZM4.75 10.4375L19 5.09375L33.25 10.4375H4.75Z"
      fill="#003594"
    />
    <path
      d="M46.1676 23H49.5682L51.7926 15.6875H51.8949L54.1193 23H57.5199L61.3807 9.90909H57.4176L55.6278 17.9886H55.5256L53.4034 9.90909H50.2841L48.1619 17.9631H48.0597L46.2699 9.90909H42.3068L46.1676 23ZM65.9644 23.179C68.6874 23.179 70.4388 21.875 70.7712 19.8295H67.5496C67.345 20.3857 66.7634 20.6989 66.0411 20.6989C64.9928 20.6989 64.3791 20.0085 64.3791 19.0625V18.9091H70.7712V18.0909C70.7712 14.9652 68.8536 13.054 65.8876 13.054C62.845 13.054 60.9019 15.0739 60.9019 18.1165C60.9019 21.2933 62.8195 23.179 65.9644 23.179ZM64.3791 16.9659C64.3983 16.1158 65.1014 15.5341 65.9644 15.5341C66.8401 15.5341 67.5048 16.1222 67.524 16.9659H64.3791ZM81.0054 16.3778C80.9159 14.3004 79.1901 13.054 76.352 13.054C73.5459 13.054 71.8136 14.2045 71.8264 16.25C71.8136 17.7969 72.8172 18.7876 74.8179 19.1392L76.5565 19.446C77.3236 19.5866 77.6688 19.7912 77.6815 20.1619C77.6688 20.571 77.2021 20.8011 76.5565 20.8011C75.7575 20.8011 75.195 20.456 75.0992 19.8295H71.5963C71.7881 21.843 73.5267 23.179 76.531 23.179C79.2476 23.179 81.2483 21.8558 81.2611 19.7528C81.2483 18.3018 80.2767 17.4581 78.2696 17.0938L76.2753 16.7358C75.5274 16.6016 75.3165 16.3331 75.3293 16.0455C75.3165 15.6364 75.8215 15.4062 76.4287 15.4062C77.1254 15.4062 77.7071 15.777 77.7583 16.3778H81.0054ZM88.2881 13.1818H86.6006V10.8295H83.0722V13.1818H81.8194V15.7386H83.0722V20.1747C83.0466 22.233 84.3187 23.2749 86.754 23.1406C87.553 23.0959 88.1475 22.9297 88.4671 22.8338L87.9557 20.3537C87.8215 20.3857 87.4763 20.456 87.2654 20.456C86.8052 20.456 86.6006 20.2514 86.6006 19.8423V15.7386H88.2881V13.1818ZM94.147 23.179C96.87 23.179 98.6214 21.875 98.9538 19.8295H95.7322C95.5277 20.3857 94.946 20.6989 94.2237 20.6989C93.1754 20.6989 92.5618 20.0085 92.5618 19.0625V18.9091H98.9538V18.0909C98.9538 14.9652 97.0362 13.054 94.0703 13.054C91.0277 13.054 89.0845 15.0739 89.0845 18.1165C89.0845 21.2933 91.0021 23.179 94.147 23.179ZM92.5618 16.9659C92.581 16.1158 93.2841 15.5341 94.147 15.5341C95.0227 15.5341 95.6875 16.1222 95.7067 16.9659H92.5618ZM100.214 23H103.742V17.8864C103.742 16.7614 104.515 16.0199 105.557 16.0199C105.922 16.0199 106.51 16.0774 106.861 16.1989V13.1882C106.58 13.1051 106.273 13.054 105.966 13.054C104.918 13.054 104.1 13.6676 103.742 15.0483H103.64V13.1818H100.214V23ZM111.367 17.4773C111.373 16.5057 111.923 15.9176 112.799 15.9176C113.687 15.9176 114.211 16.5057 114.205 17.4773V23H117.733V16.7358C117.74 14.6009 116.391 13.054 114.307 13.054C112.862 13.054 111.718 13.8082 111.29 15.0483H111.188V13.1818H107.838V23H111.367V17.4773ZM130.423 9.90909V18.3977C130.423 19.3693 129.63 20.0341 128.3 20.0341C126.996 20.0341 126.204 19.3693 126.204 18.3977V9.90909H122.65V18.5511C122.65 21.5426 124.849 23.1534 128.3 23.1534C131.727 23.1534 133.951 21.5426 133.951 18.5511V9.90909H130.423ZM139.04 17.4773C139.046 16.5057 139.596 15.9176 140.471 15.9176C141.36 15.9176 141.884 16.5057 141.878 17.4773V23H145.406V16.7358C145.412 14.6009 144.064 13.054 141.98 13.054C140.535 13.054 139.391 13.8082 138.963 15.0483H138.861V13.1818H135.511V23H139.04V17.4773ZM146.968 23H150.496V13.1818H146.968V23ZM148.732 12.1591C149.691 12.1591 150.471 11.4368 150.471 10.5483C150.471 9.6598 149.691 8.9375 148.732 8.9375C147.773 8.9375 146.993 9.6598 146.993 10.5483C146.993 11.4368 147.773 12.1591 148.732 12.1591ZM162.009 13.1818H158.302L156.716 19.6761H156.614L155.029 13.1818H151.321L154.62 23H158.711L162.009 13.1818ZM167.238 23.179C169.961 23.179 171.713 21.875 172.045 19.8295H168.823C168.619 20.3857 168.037 20.6989 167.315 20.6989C166.267 20.6989 165.653 20.0085 165.653 19.0625V18.9091H172.045V18.0909C172.045 14.9652 170.127 13.054 167.162 13.054C164.119 13.054 162.176 15.0739 162.176 18.1165C162.176 21.2933 164.093 23.179 167.238 23.179ZM165.653 16.9659C165.672 16.1158 166.375 15.5341 167.238 15.5341C168.114 15.5341 168.779 16.1222 168.798 16.9659H165.653ZM173.305 23H176.833V17.8864C176.833 16.7614 177.607 16.0199 178.649 16.0199C179.013 16.0199 179.601 16.0774 179.953 16.1989V13.1882C179.671 13.1051 179.365 13.054 179.058 13.054C178.009 13.054 177.191 13.6676 176.833 15.0483H176.731V13.1818H173.305V23ZM189.904 16.3778C189.815 14.3004 188.089 13.054 185.251 13.054C182.444 13.054 180.712 14.2045 180.725 16.25C180.712 17.7969 181.716 18.7876 183.717 19.1392L185.455 19.446C186.222 19.5866 186.567 19.7912 186.58 20.1619C186.567 20.571 186.101 20.8011 185.455 20.8011C184.656 20.8011 184.094 20.456 183.998 19.8295H180.495C180.687 21.843 182.425 23.179 185.43 23.179C188.146 23.179 190.147 21.8558 190.16 19.7528C190.147 18.3018 189.175 17.4581 187.168 17.0938L185.174 16.7358C184.426 16.6016 184.215 16.3331 184.228 16.0455C184.215 15.6364 184.72 15.4062 185.327 15.4062C186.024 15.4062 186.606 15.777 186.657 16.3778H189.904ZM191.332 23H194.86V13.1818H191.332V23ZM193.096 12.1591C194.055 12.1591 194.834 11.4368 194.834 10.5483C194.834 9.6598 194.055 8.9375 193.096 8.9375C192.137 8.9375 191.357 9.6598 191.357 10.5483C191.357 11.4368 192.137 12.1591 193.096 12.1591ZM202.333 13.1818H200.645V10.8295H197.117V13.1818H195.864V15.7386H197.117V20.1747C197.091 22.233 198.363 23.2749 200.799 23.1406C201.598 23.0959 202.192 22.9297 202.512 22.8338L202 20.3537C201.866 20.3857 201.521 20.456 201.31 20.456C200.85 20.456 200.645 20.2514 200.645 19.8423V15.7386H202.333V13.1818ZM205.74 26.669C208.208 26.669 209.365 25.429 209.908 23.8182L213.488 13.1818H209.78L208.169 19.983H208.067L206.482 13.1818H202.8L206.252 23.4347L206.175 23.6136C205.887 24.1186 205.255 24.125 204.385 23.8182L203.618 26.3239C204.168 26.5412 204.929 26.669 205.74 26.669Z"
      fill="#2F495C"
    />
    <path
      d="M50.9375 32C50.9375 29.4141 49.3594 27.8906 47.2617 27.8906C45.1602 27.8906 43.5859 29.4141 43.5859 32C43.5859 34.582 45.1602 36.1094 47.2617 36.1094C49.3594 36.1094 50.9375 34.5859 50.9375 32ZM49.4805 32C49.4805 33.8203 48.5664 34.8086 47.2617 34.8086C45.9609 34.8086 45.043 33.8203 45.043 32C45.043 30.1797 45.9609 29.1914 47.2617 29.1914C48.5664 29.1914 49.4805 30.1797 49.4805 32ZM52.3076 36H53.7568V32.6016H57.0811V31.3867H53.7568V29.2148H57.4326V28H52.3076V36ZM61.4814 36H62.9307V33.2969H64.4619C66.3096 33.2969 67.3018 32.1875 67.3018 30.6484C67.3018 29.1211 66.3213 28 64.4814 28H61.4814V36ZM62.9307 32.1055V29.2109H64.2588C65.3447 29.2109 65.8252 29.7969 65.8252 30.6484C65.8252 31.5 65.3447 32.1055 64.2666 32.1055H62.9307ZM68.5605 36H73.7949V34.7852H70.0098V32.6016H73.4941V31.3867H70.0098V29.2148H73.7637V28H68.5605V36ZM81.8164 28H80.375V33.4531H80.3047L76.5391 28H75.2422V36H76.6914V30.5508H76.7578L80.5273 36H81.8164V28ZM89.9697 28H88.5283V33.4531H88.458L84.6924 28H83.3955V36H84.8447V30.5508H84.9111L88.6807 36H89.9697V28ZM95.8965 30.1992H97.291C97.2637 28.8477 96.1113 27.8906 94.4082 27.8906C92.7285 27.8906 91.4668 28.8359 91.4707 30.25C91.4707 31.3984 92.2871 32.0586 93.6035 32.3984L94.5137 32.6328C95.377 32.8516 95.9473 33.1211 95.9512 33.7422C95.9473 34.4258 95.2988 34.8828 94.3535 34.8828C93.4473 34.8828 92.7441 34.4766 92.6855 33.6367H91.2598C91.3184 35.2266 92.502 36.1211 94.3652 36.1211C96.2832 36.1211 97.3965 35.1641 97.4004 33.7539C97.3965 32.3672 96.252 31.7344 95.0488 31.4492L94.2988 31.2617C93.6426 31.1055 92.9316 30.8281 92.9395 30.1602C92.9434 29.5586 93.4824 29.1172 94.3887 29.1172C95.252 29.1172 95.8223 29.5195 95.8965 30.1992ZM98.1455 28L101.056 33.0156V36H102.501V33.0156L105.411 28H103.774L101.817 31.5391H101.739L99.7822 28H98.1455ZM106.437 36H111.41V34.7852H107.887V28H106.437V36ZM112.986 28H111.396L114.213 36H116.002L118.822 28H117.229L115.15 34.2969H115.068L112.986 28ZM119.969 36L120.629 34.0273H123.637L124.301 36H125.848L123.027 28H121.238L118.422 36H119.969ZM121.02 32.8633L122.102 29.6406H122.164L123.246 32.8633H121.02ZM133.476 28H132.034V33.4531H131.964L128.198 28H126.901V36H128.351V30.5508H128.417L132.187 36H133.476V28ZM136.504 28H135.055V36H136.504V28ZM139.101 36L139.761 34.0273H142.769L143.433 36H144.979L142.159 28H140.37L137.554 36H139.101ZM140.151 32.8633L141.233 29.6406H141.296L142.378 32.8633H140.151Z"
      fill="#2F495C"
    />
  </svg>
);

Logo.propTypes = {
  block: PropTypes.string,
  element: PropTypes.string,
  modifiers: PropTypes.arrayOf(PropTypes.string),
};

export default Logo;
