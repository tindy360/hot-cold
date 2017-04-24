import React from 'react';
import { connect } from 'react-redux';
import Message from '../Message/Message'
import Guesses from '../Guesses/Guesses'
import { submitAnswer, displayFeedback, divToggle, guessCount} from '../../actions';

const Game = ({submitGuess, gameNumber, modalMessage, message, toggleDiv, guessesSeen, countGuesses,}) => (
  <div>
    <form onSubmit={(e)=>{
        e.preventDefault();

        const userGuess = e.target.userGuess.value;
        submitGuess(userGuess);
        Math.round(gameNumber);// get whole number
        console.log('game number', gameNumber);

        let displayMessage = '';
        let numberTested = Math.abs(userGuess - gameNumber)

        // check logic for diffrence form generated number
        if (numberTested < 10) {
          displayMessage = 'Hot'
          modalMessage(displayMessage)
        }

        if (numberTested < 5) {
          displayMessage = 'Red Hot'
          modalMessage(displayMessage)
        }

        if (numberTested > 20 ){
          displayMessage = 'luke warm'
          modalMessage(displayMessage)
        }

        if (numberTested > 40 ){
          displayMessage = 'Cold'
          modalMessage(displayMessage)
        }

        if (numberTested > 50){
          displayMessage = 'Ice Cold'
          modalMessage(displayMessage)
        }

        // eslint-disable-next-line
        if (userGuess == gameNumber){
          displayMessage = 'You are correct!'
          modalMessage(displayMessage)
        }

        e.target.userGuess.value = "";

        if (displayMessage == 'You are correct!')
          console.log('test')

      }}>
      <input name="userGuess" type="number"/>
    <button type="submit" onClick={(e)=> {toggleDiv(); countGuesses()}} >Guess</button>
    </form>
    <Message />
    <Guesses />

  </div>

)


  const mapDispatchToProps = (dispatch) => ({
    submitGuess: (guess) => dispatch(submitAnswer(guess)),
    modalMessage: (message) => dispatch(displayFeedback(message)),
    toggleDiv: () => dispatch(divToggle()),
    countGuesses: () => dispatch(guessCount())
  })

  const mapStateToProps = (state) =>({
    gameNumber: state.randomNumber,
    message: state.message,
    guessesSeen: state.guessCount
  })
export default connect(mapStateToProps, mapDispatchToProps)(Game)
