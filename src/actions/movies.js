import { config } from '../config';
import { movieActionTypes } from '../constants/movies';
import $ from 'jquery';

export function requestMovie(title) {
	return dispatch => {
		dispatch({
			type: movieActionTypes.MOVIE_SUBMITTED,
			title,
		});

		$.ajax(`${config.omdbURI}t=${title}`, {
			method: 'GET',
			success: (data, status, xhr) => {
				dispatch(movieSuccess(data));
			},

			error: (xhr, status, error) => {
				dispatch(movieError(error));
			},
		});
	}
}

function movieSuccess(data) {
	return {
		type: movieActionTypes.MOVIE_ADDED_SUCCESS,
		data,
	};
}

function movieError(error) {
	return {
		type: movieActionTypes.MOVIE_ADDED_ERROR,
		error,
	};
}