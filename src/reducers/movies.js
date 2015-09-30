import createReducer from '../util/create-reducer';
import { movieActions } from '../actions';

const initialState = {
    items: [],
};

export function movies(state = initialState, action={}) {
    return createReducer(state, action, {

    });
}
