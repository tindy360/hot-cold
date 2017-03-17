import React from 'react';
import { connect } from 'react-redux';
import { submitAnswer } from '../actions';

const Game = ({submitGuess}) => (
  <div>
    <form onSubmit={(e)=>{
        e.preventDefault();

        const userGuess = e.target.userGuess.value;
        console.log('user input', userGuess);
        submitGuess(userGuess)
        e.target.userGuess.value = "";

      }}>
      <input name="userGuess" type="text"/>
    <button type="submit">Guess</button>
    </form>
  </div>

)

  const mapDispatchToProps = (dispatch) => ({
    submitGuess: (guess) => dispatch(submitAnswer(guess)),
  })


export default connect(null, mapDispatchToProps)(Game)
