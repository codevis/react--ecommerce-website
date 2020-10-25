//action that has type and payload for users
import { UserActionTypes } from './user.types';

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});
