import React, { Component } from 'react';
import styles from './styles.scss';
import { Movie } from '../../components';


export default class Library extends Component {
	render() {
		const { movies } = this.props;

		return movies.length === 0 ? (
			<div className={styles.container}>
				<h3>There are no movies in your library yet.</h3>
			</div>
		) :
		(
			<div className={styles.container}>
				{movies.map((movie, i) => 
					<Movie
						key={i}
						title={movie.Title}
						image={movie.Poster}
						runtime={movie.Runtime}
						year={movie.Year}
						plot={movie.Plot}
				/>)}
			</div>
		);
	}
}