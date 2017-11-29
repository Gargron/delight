import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import DisplayName from './DisplayName';

export default class Message extends PureComponent {

  static propTypes = {
    message: PropTypes.object.isRequired,
  };

  render () {
    const { message } = this.props;

    return (
      <div className='message'>
        <div className='message__avatar'><Avatar userId={message.sender} size={40} /></div>
        <div className='message__body'>
          <div className='message__meta'><DisplayName userId={message.sender} /> <span>{message.origin_server_ts}</span></div>
          <div className='message__text'>{message.content.body}</div>
        </div>
      </div>
    );
  }

}
