import React from 'react';
import Square from './controls/Square';
import Knight from './controls/Knight';

export default class Board extends React.Component {
  static propTypes = {
    updatePosition:React.PropTypes.func.isRequired,
    game:React.PropTypes.object.isRequired,
  };

  renderSquare(i) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;

    const [knightX, knightY] = this.props.game.position;
    const piece = (x === knightX && y === knightY) ?
      <Knight /> :
      null;

    return (
      <div key={i}
           style={{ width: '12.5%', height: '12.5%' }}
           onClick={() => this.handleSquareClick(x, y)}>
        <Square black={black}>
          {piece}
        </Square>
      </div>
    );
  }

  handleSquareClick(toX, toY) {
    this.props.updatePosition(arguments)
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i));
    }

    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {squares}
      </div>
    );
  }
}