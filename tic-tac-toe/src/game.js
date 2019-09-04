import React from 'react';

import Board from './board.js'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
          position: null
        }
      ],
      stepNumber: 0,
      selectedStepNumber: -1,  
      xIsNext: true,
      isSortAscending: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
          position: i,
          winSquares: null
        }
      ]),
      stepNumber: history.length,
      selectedStepNumber: -1,
      xIsNext: !this.state.xIsNext
    });
  }


  handleSortBtnClick() {
    this.setState({
      isSortAscending: !this.state.isSortAscending
    });
  }


  jumpTo(step) {
    this.setState({
      stepNumber: step,
      selectedStepNumber: step,
      xIsNext: (step % 2) === 0
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const sortedHistory = this.state.isSortAscending ? history : history.slice().reverse();
    const moves = sortedHistory.map((step, idx) => {
      const move = this.state.isSortAscending ? idx : history.length - idx - 1;
      const desc = move ?
        `Go to move #${move} - (${Math.floor(step.position / 3) + 1}, ${step.position % 3 + 1})`:
        'Go to game start';
      
      return this.state.selectedStepNumber !== move ? (
        <li key={idx}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      ) : (
        <li key={idx}>
          <button onClick={() => this.jumpTo(move)}><strong>{desc}</strong></button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + current.squares[winner[0]];
      current.winSquares = winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winSquares={current.winSquares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>
            <button onClick = {() => this.handleSortBtnClick()}>Sort</button>
          </div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return lines[i];
    }
  }
  return null;
}

export default Game;
