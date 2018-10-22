import { RECEIVE_FETCH_TODOS, REQUEST_EDIT_TODO } from '../actions/types'
const initialState = {
    items: [],
    item: {}
}
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case RECEIVE_FETCH_TODOS:
            return {...state, items: payload }
        case REQUEST_EDIT_TODO:
            return {...state, item: payload }
        default:
            return state
    }
}