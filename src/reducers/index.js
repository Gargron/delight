import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import user from './user';
import rooms from './rooms';
import messages from './messages';
import navigation from './navigation';
import profiles from './profiles';
import members from './members';

export default combineReducers({
  form: formReducer,
  user,
  rooms,
  messages,
  navigation,
  profiles,
  members,
});
