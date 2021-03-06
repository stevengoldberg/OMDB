import createReducer from '../util/create-reducer';
import { movieActionTypes } from '../constants/movies';

const initialState = {
    library: [],
    formError: false,
    titles: [],
    searchString: '',
};

export function library(state = initialState, action={}) {
    return createReducer(state, action, {
    	[movieActionTypes.SEARCH_SUBMITTED](state, action) {
    		const { title } = action;
    		
    		return {
    			...state,
    			searchString: title,
    		};
    	},

    	[movieActionTypes.SEARCH_SUCCESS](state, action) {
    		const {data: { Search } } = action;

    		return {
    			...state,
    			titles: Search,
    			formError: false,
    		};
    	},

    	[movieActionTypes.SEARCH_ERROR](state, action) {
    		return {
    			...state,
    			titles: [],
    			searchString: '',
    			formError: true,
    		};
    	},

    	[movieActionTypes.MOVIE_ADDED_SUCCESS](state, action) {
    		const { data } = action;
    		const newLibrary = [].concat(state.library, data);

    		return {
    			...state,
    			library: newLibrary,
    		};
    	},
    });
}
