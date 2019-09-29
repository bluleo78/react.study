import React from 'react';
import PropTypes from 'prop-types';

import styles from './LoginView.module.scss';


class UserInfoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }


  handleChange=(e) => {
    this.setState({ name: e.target.value });
  }


  handleClickButton=() => {
    const { onChangeUser } = this.props;
    const { name } = this.state;
    if (onChangeUser) {
      onChangeUser(name);
    }
  }


  render() {
    const { userName, selectedUserName } = this.props;
    return (
      <div className={styles.view}>
        <div className={styles.view__body}>
          <label htmlFor="userNameInput">
            Name:
            <input
              type="text"
              value={selectedUserName}
              onChange={this.handleChange}
              disabled={userName === selectedUserName ? null : 'disabled'}
            />
          </label>
          <br />
          <button type="submit" onClick={this.handleClickButton}>{`${userName === selectedUserName ? 'Edit' : 'Ok'}`}</button>
        </div>
      </div>
    );
  }
}


UserInfoView.propTypes = {
  userName: PropTypes.string.isRequired,
  selectedUserName: PropTypes.string.isRequired,
  onChangeUser: PropTypes.func,
};

UserInfoView.defaultProps = {
  onChangeUser: () => null,
};

export default UserInfoView;
