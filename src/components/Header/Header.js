import React, { Component } from 'react';

// Component styles
import styles from './styles/styles.scss';

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        My Movie Library
      </div>
    );
  }
}
