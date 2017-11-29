import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { selectRoom } from './actions';

const mapStateToProps = (state, { id }) => ({
  active: state.navigation.roomId === id,
  room: state.rooms.find(room => room.roomId === id),
});

const mapDispatchToProps = (dispatch, { id }) => ({
  onSelectRoom: () => dispatch(selectRoom(id)),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class RoomItem extends PureComponent {

  static propTypes = {
    room: PropTypes.object.isRequired,
    active: PropTypes.bool,
    onSelectRoom: PropTypes.func.isRequired,
  };

  render () {
    const { room, active, onSelectRoom } = this.props;
    const name = room.alias || room.roomId;

    return (
      <div className={classNames('room-item', { active })} role='button' tabIndex='0' onClick={onSelectRoom}>
        # {name.replace('#', '')}
      </div>
    );
  }

}
