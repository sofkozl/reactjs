import { auth } from "../../Services/Firebase";

export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const loginUser = (user) => ({
  type: LOGIN_USER,
  payload: user
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const initAuth = (dispatch) => {
  auth.onAuthStateChanged((user) => {
    if(user) {
      dispatch(loginUser(user));
    } else {
      dispatch(logoutUser());
    }
  });
};

const initialState = {
  user: null
};

export const getUser = (state) => state.user.user;
export const getIsAuth = (state) => state.user.user !== null;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        user: action.payload
      };
    }

    case LOGOUT_USER: {
      return {
        user: null
      };
    }
    default: {
      return state;
    }
  }
};

