import {
  PICK_SERVER_REQUEST,
  PICK_SERVER_SUCCESS,
  PICK_SERVER_FAILURE,
  LOGIN_SUCCESS,
} from '../actions';

const initialState = {};

export default function userReducer (state = initialState, action) {
  switch (action.type) {
  case PICK_SERVER_REQUEST:
  case PICK_SERVER_SUCCESS:
    return { ...state, server: action.payload };
  case PICK_SERVER_FAILURE:
    return { ...state, server: null };
  case LOGIN_SUCCESS:
    return { ...state, userId: action.payload.user_id, accessToken: action.payload.access_token, server: action.payload.home_server };
  default:
    return state;
  }
};
