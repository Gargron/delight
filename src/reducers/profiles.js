import {
  SYNC_SUCCESS,
  PROFILE_FETCH_SUCCESS,
} from '../actions';

const initialState = {};

const normalize = (state, payload) => {
  const map = {};

  Object.keys(payload.rooms.join).forEach(roomId => {
    payload.rooms.join[roomId].state.events.forEach(event => {
      if (event.type !== 'm.room.member') {
        return;
      }

      map[event.sender] = {
        avatar: event.content.avatar_url,
        displayName: event.content.displayname,
      };
    });
  });

  return { ...state, ...map };
};

const update = (state, payload) => {
  const newState = { ...state };

  newState[payload.userId] = {
    avatar: payload.avatar_url,
    displayName: payload.displayname,
  };

  return newState;
};

export default function profilesReducer (state = initialState, action) {
  switch (action.type) {
  case SYNC_SUCCESS:
    return normalize(state, action.payload);
  case PROFILE_FETCH_SUCCESS:
    return update(state, action.payload);
  default:
    return state;
  }
};
