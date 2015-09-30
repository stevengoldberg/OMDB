import React, { Component } from 'react';
import styles from './styles.scss';

export default class Title extends Component {
	render() {
		return(
			<div className={styles.container}>
				{this.props.title}
			</div>
		);
	}
}