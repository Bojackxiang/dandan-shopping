import { SET_CURRENT_USER } from "../../constants/Actions";

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: user,
});
