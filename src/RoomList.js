import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sync } from './actions';
import RoomItem from './RoomItem';

const mapStateToProps = state => ({
  roomIds: state.rooms.map(room => room.roomId),
});

const mapDispatchToProps = dispatch => ({
  onSync: () => dispatch(sync()),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class RoomList extends PureComponent {

  static propTypes = {
    roomIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSync: PropTypes.func.isRequired,
  };

  componentDidMount () {
    this.props.onSync();
  }

  render () {
    const { roomIds } = this.props;

    return (
      <div className='room-list'>
        {roomIds.map(roomId => <RoomItem key={roomId} id={roomId} />)}
      </div>
    );
  }

}
