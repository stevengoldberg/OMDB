import createReducer from '../util/create-reducer';
import { movieActions } from '../actions';

const initialState = {
    library: [],
    formError: false,
};

export function library(state = initialState, action={}) {
    return createReducer(state, action, {

    });
}
