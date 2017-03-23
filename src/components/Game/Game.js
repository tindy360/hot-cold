import React from 'react';
import { connect } from 'react-redux';
import { submitAnswer, displayFeedback } from '../../actions';

const Game = ({submitGuess, gameNumber, modalMessage, message}) => (
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

      }}>
      <input name="userGuess" type="number"/>
    <button type="submit">Guess</button>
    </form>
    <p>{message}</p>
  </div>

)

  const mapDispatchToProps = (dispatch) => ({
    submitGuess: (guess) => dispatch(submitAnswer(guess)),
    modalMessage: (message) => dispatch(displayFeedback(message)),
  })

  const mapStateToProps = (state) =>({
    gameNumber: state.randomNumber,
    message: state.message,
  })
export default connect(mapStateToProps, mapDispatchToProps)(Game)
