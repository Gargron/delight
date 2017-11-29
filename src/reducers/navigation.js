import {
  SYNC_SUCCESS,
  ROOM_SELECT,
} from '../actions';

const initialState = {};

export default function navigationReducer (state = initialState, action) {
  switch (action.type) {
  case SYNC_SUCCESS:
    return { ...state, roomId: Object.keys(action.payload.rooms.join)[0] };
  case ROOM_SELECT:
    return { ...state, roomId: action.payload };
  default:
    return state;
  }
};
