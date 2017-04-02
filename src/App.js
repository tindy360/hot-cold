import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { generateRandomNumber, getGuesses } from './actions';
import Game from './components/Game/Game';

class App extends Component {

  componentDidMount() {
   this.props.generateCorrectAnswer()
   this.props.getStoredGuesses()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Hot-n-Cold</h2>
          <h3>Made with React with Redux</h3>
        </div>

        <Game />
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => ({
  generateCorrectAnswer: () => dispatch(generateRandomNumber()),
  getStoredGuesses: () => dispatch(getGuesses())
})

export default connect(null, mapDispatchToProps)(App);
