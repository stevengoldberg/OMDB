import { config } from '../config';
import { movieActionTypes } from '../constants/movies';
import $ from 'jquery';

export function submitSearch(title) {
	return dispatch => {
		dispatch({
			type: movieActionTypes.SEARCH_SUBMITTED,
			title,
		});

		$.ajax(`${config.omdbURI}s=${title}`, {
			method: 'GET',
			success: (data, status, xhr) => {
				if(data.Error === undefined) {
					dispatch(searchSuccess(data));
				} else {
					dispatch(searchError(data.Error));
				}
			},

			error: (xhr, status, error) => {
				dispatch(searchError(error));
			},
		});
	}
}

function searchSuccess(data) {
	return {
		type: movieActionTypes.SEARCH_SUCCESS,
		data,
	};
}

function searchError(error) {
	return {
		type: movieActionTypes.SEARCH_ERROR,
		error,
	};
}

export function addMovie(data) {
	const { imdbID, title } = data;

	return dispatch => {
		dispatch({
			type: movieActionTypes.ADD_TITLE_CLICKED,
			data
		});

		$.ajax(`${config.omdbURI}i=${imdbID}`, {
			method: 'GET',
			success: (data, status, xhr) => {
				if(data.Error === undefined) {
					dispatch(movieSuccess(data));
				} else {
					dispatch(movieError(data.Error));
				}
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