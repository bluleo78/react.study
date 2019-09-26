import React from 'react';
import PropTypes from 'prop-types';


class ChatInputView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '', emotion: null, ...props.initialState };
  }


  handleChange=(e) => {
    this.setState({ text: e.target.value });
  }


  handleClickButton=() => {
    const { onSubmitMessage } = this.props;
    const { text, emotion } = this.state;
    if (onSubmitMessage) {
      onSubmitMessage(text, emotion);
    }
    this.setState({ text: '' });
  }


  render() {
    const { text } = this.state;

    const styleContainer = {
      display: 'flex',
      alignItems: 'center',
      height: '100%',
      maxWidth: 300,
    };

    return (
      <div style={styleContainer}>
        <input
          style={{ flex: '1 1 100px', marginLeft: 5 }}
          type="text"
          value={text}
          onChange={this.handleChange}
        />
        <div style={{ flex: '0 0 50px', margin: 5 }}>
          <button type="submit" onClick={this.handleClickButton}>Enter</button>
        </div>
      </div>
    );
  }
}


ChatInputView.propTypes = {
  initialState: PropTypes.shape({
    text: PropTypes.string,
    emotion: PropTypes.string,
  }),
  onSubmitMessage: PropTypes.func,
};

ChatInputView.defaultProps = {
  initialState: {},
  onSubmitMessage: () => null,
};

export default ChatInputView;
