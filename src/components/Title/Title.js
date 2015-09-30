import React, { Component } from 'react';
import styles from './styles.scss';

export default class Title extends Component {
	handleClick = () => {
		const { addMovie, title } = this.props;
		addMovie({
			title: title.Title,
			imdbID: title.imdbID,
		});
	}

	render() {
		return(
			<div className={styles.container} onClick={this.handleClick}>
				<span>{this.props.title.Title}</span>
			</div>
		);
	}
}