import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pickServer, login } from './actions';
import { Field, reduxForm } from 'redux-form';
import Sidebar from './Sidebar';
import MessageArea from './MessageArea';
import MemberList from './MemberList';

const mapStateToProps = state => ({
  pickedServer: !!state.user.server,
  loggedIn: !!state.user.accessToken,
});

const mapDispatchToProps = dispatch => ({
  onPickServer: values => dispatch(pickServer(values.server)),
  onLogin: values => dispatch(login(values.user, values.password)),
});

@reduxForm({ form: 'login' })
class LoginForm extends PureComponent {

  render () {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field name='user' component='input' type='text' />
        <Field name='password' component='input' type='password' />
        <button type='submit'>Login</button>
      </form>
    );
  }

}

@reduxForm({ form: 'pickServer' })
class PickServerForm extends PureComponent {

  render () {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <Field name='server' component='input' type='text' />
        <button type='submit'>Pick server</button>
      </form>
    );
  }

}

@connect(mapStateToProps, mapDispatchToProps)
export default class UI extends PureComponent {

  static propTypes = {
    pickedServer: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    onPickServer: PropTypes.func.isRequired,
    onLogin: PropTypes.func.isRequired,
  };

  render () {
    const { pickedServer, loggedIn, onPickServer, onLogin } = this.props;

    if (loggedIn) {
      return (
        <div className='ui'>
          <Sidebar />
          <MessageArea />
          <MemberList />
        </div>
      );
    } else if (pickedServer) {
      return (
        <LoginForm onSubmit={onLogin} />
      );
    } else {
      return (
        <PickServerForm onSubmit={onPickServer} />
      );
    }
  }

}
