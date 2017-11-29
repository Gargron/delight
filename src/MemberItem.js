import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import DisplayName from './DisplayName';

export default class MemberItem extends PureComponent {

  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  render () {
    const { id } = this.props;

    return (
      <div className='member-item'>
        <div className='member-item__avatar'><Avatar userId={id} size={40} /></div>

        <div className='member-item__name'>
          <DisplayName userId={id} />
        </div>
      </div>
    );
  }

}
