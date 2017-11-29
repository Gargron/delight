import React, { PureComponent } from 'react';
import RoomList from './RoomList';
import Profile from './Profile';

export default class Sidebar extends PureComponent {

  render () {
    return (
      <div className='sidebar'>
        <RoomList />
        <Profile />
      </div>
    );
  }

}
