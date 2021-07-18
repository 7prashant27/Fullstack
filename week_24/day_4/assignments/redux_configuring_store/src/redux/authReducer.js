import { AUTH_SUCCESS, LOGOUT } from "./actionTypes";
const initState = {
  isAuth: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      if (
        action.payload.email === "admin" &&
        action.payload.password === "admin"
      ) {
        return {
          ...state,
          isAuth: true,
        };
      }

    case LOGOUT:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
