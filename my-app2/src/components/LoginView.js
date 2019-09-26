import React from 'react';
import PropTypes from 'prop-types';


class LoginView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }


  handleChange=(e) => {
    this.setState({ name: e.target.value });
  }


  handleClickButton=() => {
    const { onSubmitLogin } = this.props;
    const { name } = this.state;
    if (onSubmitLogin) {
      onSubmitLogin(name);
    }
  }


  render() {
    const styleView = { width: 300, height: 500, margin: 20 };
    const styleBody = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      outlineStyle: 'solid',
      outlineWidth: 'thin',
    };

    return (
      <div style={styleView}>
        <div style={styleBody}>
          <label htmlFor="userNameInput">
            Nick:
            <input
              type="text"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit" onClick={this.handleClickButton}>로그인</button>
        </div>
      </div>
    );
  }
}


LoginView.propTypes = {
  onSubmitLogin: PropTypes.func,
};

LoginView.defaultProps = {
  onSubmitLogin: () => null,
};

export default LoginView;
