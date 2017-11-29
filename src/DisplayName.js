import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state, { userId }) => ({
  displayName: state.profiles[userId].displayName,
});

@connect(mapStateToProps)
export default class Avatar extends PureComponent {

  static propTypes = {
    userId: PropTypes.string.isRequired,
    displayName: PropTypes.string,
  };

  render () {
    const { userId, displayName } = this.props;

    return (
      <span className='display-name'>{displayName || userId}</span>
    );
  }

}
