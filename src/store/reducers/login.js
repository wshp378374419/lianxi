import { CHANGE_LOGIN } from "../actionTypes";
export const is_login = (state = false, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return !state;
    default:
      return state;
  }
};
