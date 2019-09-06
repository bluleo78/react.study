import React from 'react';
import produce from 'immer';
import { Container, Row, Button } from 'react-bootstrap';

import Board from '../components/Board.js'

class App extends React.Component {
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
    const nextState = produce(this.state, state => {
      state.history.push({
        squares,
        position: i,
        winSquares: null,
      });
      state.stepNumber = state.history.length - 1;
      state.selectedStepNumber = -1;
      state.xIsNext = !this.state.xIsNext;
    });
    this.setState(nextState);
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
          <Button variant="Link" size = "sm" onClick={() => this.jumpTo(move)}>{desc}</Button>
        </li>
      ) : (
        <li key={idx}>
          <Button variant="Link" size = "sm" onClick={() => this.jumpTo(move)}><strong>{desc}</strong></Button>
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
        <Container>
          <Row>
            <div className="game-board">
              <Board
                squares={current.squares}
                winSquares={current.winSquares}
                onClick={i => this.handleClick(i)}
              />
            </div>
          </Row>
          <Row>
            <div className="game-info">
              <div>{status}</div>
              <div style = {{height: 30, marginTop: 10, marginBottom: 10}} >
                <Button size = "sm" style = {{fontSize: 12}}
                  onClick = {() => this.handleSortBtnClick()}>Sort</Button>
              </div>
              <ol>{moves}</ol>
            </div>
          </Row>
        </Container>
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

export default App;
