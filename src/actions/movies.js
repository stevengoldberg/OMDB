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