import { UserActionTypes } from './user-types';

const INITIAL_STATE = {
    currentUser: null
};

// state: current state that the redux store is going to pass to the reducer whenever an action fires
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;