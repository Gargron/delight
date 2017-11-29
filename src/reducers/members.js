import { SYNC_SUCCESS } from '../actions';

const initialState = {};

const normalize = (state, payload) => {
  const map = {};

  Object.keys(payload.rooms.join).forEach(roomId => {
    map[roomId] = payload.rooms.join[roomId].state.events.filter(event => event.type === 'm.room.member' && event.membership === 'join').map(event => ({ userId: event.sender, group: event.content.kind }));
  });

  return { ...state, ...map };
};

export default function membersReducer (state = initialState, action) {
  switch (action.type) {
  case SYNC_SUCCESS:
    return normalize(state, action.payload);
  default:
    return state;
  }
};
