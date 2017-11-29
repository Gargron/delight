import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = (state, { userId }) => ({
  server: state.user.server,
  url: state.profiles[userId].avatar,
});

@connect(mapStateToProps)
export default class Avatar extends PureComponent {

  static propTypes = {
    url: PropTypes.string,
    server: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
  };

  render () {
    const { url, server, size } = this.props;
    const imageUrl = url ? `https://${server}/_matrix/media/v1/download/${url.replace('mxc://', '')}` : '';

    return (
      <div className='avatar' style={{ backgroundImage: `url(${imageUrl})`, width: size, height: size }} />
    );
  }

}
