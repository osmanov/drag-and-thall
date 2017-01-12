import React from 'react';
//import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';
import Board from './components/Board';
import { updateKnightPosition } from './redux/modules/game'

class App extends React.Component {
  render() {
    console.log('!!!')
    console.log(this.props)
    return (
      <div className="App">
        <Board {...this.props} />
      </div>
    );
  }
}
const mapActionCreators = (dispatch) => ({
  updatePosition: (position) => dispatch(updateKnightPosition(position))
})

const mapStateToProps = (state) => {
  return {
    game:state.game
  }

}

export default connect(mapStateToProps, mapActionCreators)(App)
