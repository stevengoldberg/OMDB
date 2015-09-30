import React, { Component } from 'react';
import styles from './styles.scss';


export default class Movie extends Component {
	render() {
		const { title, year, image, runtime, plot} = this.props;
		return (
			<div className={styles.container}>
				<div className={styles.posterFrame}>
					<h3 className={styles.title}>{title}</h3>
					<img src={image} className={styles.poster}/>
					<h4 className={styles.title}>{year}</h4>
				</div>
				<div className={styles.info}>
					<p>{plot}</p>
				</div>
			</div>
		);
	}
}