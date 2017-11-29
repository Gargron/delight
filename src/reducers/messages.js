import { SYNC_SUCCESS } from '../actions';

const initialState = {};

const normalize = (state, payload) => {
  const map = {};

  Object.keys(payload.rooms.join).forEach(roomId => {
    map[roomId] = payload.rooms.join[roomId].timeline.events.filter(event => event.type === 'm.room.message');
  });

  return { ...state, ...map };
};

export default function messagesReducer (state = initialState, action) {
  switch (action.type) {
  case SYNC_SUCCESS:
    return normalize(state, action.payload);
  default:
    return state;
  }
};
