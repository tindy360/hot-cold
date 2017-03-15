import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { generateRandomNumber } from './actions';
import Game from './components/Game';

class App extends Component {

  componentDidMount() {
    this.props.generateCorrectAnswer()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.props.correctAnswer}
        <Game />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  correctAnswer: state.randomNumber
})

const mapDispatchToProps = (dispatch) => ({
  generateCorrectAnswer: () => dispatch(generateRandomNumber())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
