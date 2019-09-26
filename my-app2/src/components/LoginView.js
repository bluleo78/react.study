import React from 'react';

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
      width: '100%', height: '100%', outlineStyle: 'solid', outlineWidth: 'thin',
    };

    return (
      <div style={styleView}>
        <div style={styleBody}>
          <label htmlFor="userNameInput">
            이름:
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

export default LoginView;
