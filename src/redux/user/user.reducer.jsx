//we must have a state for an reducer initial state to create an new one
import { UserActionTypes } from './user.types';

const INTIAL_STATE =
{
    currentUser: null
}

// function that having state and action 
//checks the action type = case condition
//if yes return new state by action.payload
//else it will return old state (initial state)
const userReducer = (state = INTIAL_STATE, action) =>{
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
          return {
            ...state,
            currentUser: action.payload
          };
        default:
          return state;
      }
    };
    

export default userReducer;