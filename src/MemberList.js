import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MemberItem from './MemberItem';
import { Scrollbars } from 'react-custom-scrollbars';

const mapStateToProps = state => ({
  userIds: state.members[state.navigation.roomId].map(item => item.userId),
});

@connect(mapStateToProps)
export default class MemberList extends PureComponent {

  static propTypes = {
    userIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render () {
    const { userIds } = this.props;

    return (
      <Scrollbars autoHide className='member-list'>
        {userIds.map(userId => <MemberItem key={userId} id={userId} />)}
      </Scrollbars>
    );
  }

}
