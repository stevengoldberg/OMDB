import config from '../config';
import * as movieActions from '../constants/movies';
import $ from 'jquery';

export default function requestMovie(title) {
	return dispatch => {
		dispatch({
			type: movieActions.MOVIE_SUBMITTED,
			title,
		});

		$.ajax(`${config.omdbURI}t=titles`, {
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
		type: movieActions.MOVIE_ADDED_SUCCESS,
		data,
	};
}

function movieError(error) {
	return {
		type: movieActions.MOVIE_ADDED_ERROR,
		error,
	};
}