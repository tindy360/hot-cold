import React from 'react';
import { connect } from 'react-redux';
import Message from '../Message/Message'
import { submitAnswer, displayFeedback, divToggle, guessCount} from '../../actions';

const Game = ({submitGuess, gameNumber, modalMessage, message, toggleDiv, guessesSeen, guessCount}) => (
  <div>
    <form onSubmit={(e)=>{
        e.preventDefault();

        const userGuess = e.target.userGuess.value;
        console.log('userGuess', userGuess);
        submitGuess(userGuess);
        Math.round(gameNumber);
        console.log('game number', gameNumber);

        let displayMessage = '';
        let numberTested = Math.abs(userGuess - gameNumber)


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

        //if (modalMessage == 'You are correct!'){

        //}

      }}>
      <input name="userGuess" type="number"/>
    <button type="submit" onClick={(e)=> {toggleDiv(); guessCount();}} >Guess</button>
    </form>
    <Message />
  </div>

)

  const mapDispatchToProps = (dispatch) => ({
    submitGuess: (guess) => dispatch(submitAnswer(guess)),
    modalMessage: (message) => dispatch(displayFeedback(message)),
    toggleDiv: () => dispatch(divToggle()),
    guessCount: () => dispatch(guessCount())
  })

  const mapStateToProps = (state) =>({
    gameNumber: state.randomNumber,
    message: state.message,
    guessesSeen: state.guessCount
  })
export default connect(mapStateToProps, mapDispatchToProps)(Game)
