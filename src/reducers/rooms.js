import { SYNC_SUCCESS } from '../actions';

const initialState = [];

const findEvent = (payload, roomId, name) => {
  const { events } = payload.rooms.join[roomId].state;

  if (!events) {
    return {};
  }

  const event = events.find(item => item.type === name);

  return event ? event.content : {};
};

export default function roomsReducer (state = initialState, action) {
  switch (action.type) {
  case SYNC_SUCCESS:
    return Object.keys(action.payload.rooms.join).map(roomId => {
      const { alias }  = findEvent(action.payload, roomId, 'm.room.canonical_alias');
      const { name }   = findEvent(action.payload, roomId, 'm.room.name');
      const { topic }  = findEvent(action.payload, roomId, 'm.room.topic');
      const { url }    = findEvent(action.payload, roomId, 'm.room.avatar');

      return {
        roomId,
        alias,
        name,
        topic,
        avatar: url,
      };
    });
  default:
    return state;
  }
};
