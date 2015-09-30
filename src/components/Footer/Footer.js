import React, { Component } from 'react';

// Component styles
import styles from './styles/styles.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className={styles.footer}>
        <a href="https://github.com/anorudes/redux-easy-boilerplate">GitHub</a>
      </div>
    );
  }
}
