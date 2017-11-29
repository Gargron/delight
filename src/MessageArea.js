import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Message from './Message';

const mapStateToProps = state => ({
  messages: state.messages[state.navigation.roomId],
});

@connect(mapStateToProps)
export default class MessageArea extends PureComponent {

  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object),
  };

  render () {
    const { messages } = this.props;

    return (
      <div className='message-area'>
        {messages.map(message => <Message key={message.event_id} message={message} />)}
      </div>
    );
  }

}
