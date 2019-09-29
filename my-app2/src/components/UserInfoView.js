import React from 'react';
import PropTypes from 'prop-types';

import styles from './LoginView.module.scss';


class UserInfoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }


  handleChangeName=(e) => {
    this.setState({ name: e.target.value });
  }


  handleClickButton=() => {
    const { onChangeUser, currentUser, selectedUserName } = this.props;
    const { name } = this.state;

    onChangeUser(currentUser.name === selectedUserName ? name : null);
  }


  render() {
    const { currentUser, selectedUserName } = this.props;
    const { name } = this.state;

    return (
      <div className={styles.view}>
        <div className={styles.view__body}>
          <label htmlFor="userNameInput">
            Name:
            <input
              type="text"
              value={name || selectedUserName}
              onChange={this.handleChangeName}
              disabled={currentUser.name === selectedUserName ? null : 'disabled'}
            />
          </label>
          <br />
          <button type="submit" onClick={this.handleClickButton}>{`${currentUser.name === selectedUserName ? 'Edit' : 'Ok'}`}</button>
        </div>
      </div>
    );
  }
}


UserInfoView.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
  }),
  selectedUserName: PropTypes.string.isRequired,
  onChangeUser: PropTypes.func,
};

UserInfoView.defaultProps = {
  currentUser: null,
  onChangeUser: () => null,
};

export default UserInfoView;
