import React from 'react';

class ChatInputView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chatText: '', emotion: null };
  }


  handleChange=(e) => {
    this.setState({ chatText: e.target.value });
  }


  handleClickButton=() => {
    const { onSubmit } = this.props;
    const { chatText } = this.state;
    if (onSubmit) {
      onSubmit(chatText);
    }
    this.setState({ chatText: '' });
  }


  render() {
    const { chatText } = this.state;

    return (
      <div>
        <input
          type="text"
          value={chatText}
          onChange={this.handleChange}
        />
        <button type="submit" onClick={this.handleClickButton}>입력</button>
      </div>
    );
  }
}

export default ChatInputView;
