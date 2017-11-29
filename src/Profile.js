import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProfile } from './actions';
import Avatar from './Avatar';
import DisplayName from './DisplayName';

const mapStateToProps = state => ({
  userId: state.user.userId,
});

const mapDispatchToProps = dispatch => ({
  onFetchProfile: () => dispatch(fetchProfile()),
});

@connect(mapStateToProps, mapDispatchToProps)
export default class Profile extends PureComponent {

  static propTypes = {
    userId: PropTypes.string.isRequired,
    onFetchProfile: PropTypes.func.isRequired,
  };

  componentDidMount () {
    this.props.onFetchProfile();
  }

  render () {
    const { userId } = this.props;

    return (
      <div className='profile'>
        <div><Avatar userId={userId} size={40} /></div>

        <div>
          <DisplayName userId={userId} />
          {userId}
        </div>
      </div>
    );
  }

}
