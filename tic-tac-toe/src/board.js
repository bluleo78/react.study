import React from 'react';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}


class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        {
          [0, 1, 2].map( i => (
            <div className="board-row">
              {
                [0, 1, 2].map( j => (
                  this.renderSquare(i * 3 + j)
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default Board;
