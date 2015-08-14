/** @flow */

// weird destructuring to handle server rendering
import _styles from './styles.css';
var styles = _styles.locals ? _styles.locals : _styles;

import React, {Component, PropTypes} from 'react';
import Logo from 'Logo';

class Header extends Component {
  render(): ReactElement {
    return (
      <section className={styles.hero}>
        <Logo className={styles.logo} />
        <h1 className={styles.title}>welcome home</h1>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <a className={styles.itemButton} href={`https://www.google.com/maps/place/River+Church+Charlotte/@35.4502383,-80.8310993,14z/data=!4m5!1m2!2m1!1sriver+church+charlotte!3m1!1s0x8856a9a4b0ed6d5b:0x35e7dc18424c92f2`}>
              <i className={`${styles.itemIcon} ion-location`}></i>
              <div className={styles.itemButtonTitle}>sunday at 10 am</div>
              <div className={styles.itemButtonText}>17615 Old Statesville Rd</div>
              <div className={styles.itemButtonText}>Cornelius, NC 28031</div>
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.itemButton} href="http://pushpay.com/pay/riverchurchcharlotte">
              <img style={{width: 50, height: 50}} src="/public/images/icon-pushpay.svg" className={styles.itemIcon} />
              <div className={styles.itemButtonTitle}>give online</div>
              <div className={styles.itemButtonText}>powered by Pushpay</div>
            </a>
          </li>
          <li className={styles.listItem}>
            <a className={styles.itemButton} href="#events">
              <i className={`${styles.itemIcon} ion-calendar`}></i>
              <div className={styles.itemButtonTitle}>upcoming events</div>
            </a>
          </li>
        </ul>

        <a href="#sunday-morning" className={styles.readMore + ' ion-chevron-down'} aria-label="Scroll to Staff"></a>
        <img className={styles.image} src="/public/images/hero.jpg" />
      </section>

    );
  }
}

export default Header;
