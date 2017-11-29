import { api } from './util';

export const PICK_SERVER_REQUEST   = 'PICK_SERVER_REQUEST';
export const PICK_SERVER_SUCCESS   = 'PICK_SERVER_SUCCESS';
export const PICK_SERVER_FAILURE   = 'PICK_SERVER_FAILURE';
export const LOGIN_SUCCESS         = 'LOGIN_SUCCESS';
export const SYNC_SUCCESS          = 'SYNC_SUCCESS';
export const PROFILE_FETCH_SUCCESS = 'PROFILE_FETCH_SUCCESS';
export const ROOM_SELECT           = 'ROOM_SELECT';

export function pickServer(server) {
  return (dispatch, getState) => {
    dispatch({ type: PICK_SERVER_REQUEST, payload: server });

    api(getState).get('_matrix/client/r0/login').then(res => {
      if (res.data.flows.find(flow => flow.type === 'm.login.password')) {
        dispatch({ type: PICK_SERVER_SUCCESS, payload: server });
      } else {
        dispatch({ type: PICK_SERVER_FAILURE });
      }
    }).catch(err => {
      dispatch({ type: PICK_SERVER_FAILURE });
    });
  };
};

export function login(user, password) {
  return (dispatch, getState) => {
    api(getState).post('_matrix/client/r0/login', { user, password, type: 'm.login.password' }).then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    });
  };
};

export function sync() {
  return (dispatch, getState) => {
    api(getState).get('_matrix/client/r0/sync').then(res => {
      console.log(res.data);

      dispatch({
        type: SYNC_SUCCESS,
        payload: res.data,
      });
    });
  };
};

export function fetchProfile() {
  return (dispatch, getState) => {
    const { userId } = getState().user;

    api(getState).get(`/_matrix/client/r0/profile/${userId}`).then(res => {
      dispatch({
        type: PROFILE_FETCH_SUCCESS,
        payload: { ...res.data, userId },
      });
    });
  };
};

export function selectRoom(roomId) {
  return {
    type: ROOM_SELECT,
    payload: roomId,
  };
};
