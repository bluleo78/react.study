import React from 'react';

function Square(props) {
  const className = props.isWinSquare ? "square winSquare":  "square" ;
  return (
    <button className={className} onClick={props.onClick}>
      {props.value}
    </button>
  );
}


class Board extends React.Component {
  renderSquare(i) {
    const isWinSquare = this.props.winSquares && this.props.winSquares.includes(i);
    return (
      <Square
        key = {i}
        isWinSquare = {isWinSquare}
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
            <div key={i} className="board-row">
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
