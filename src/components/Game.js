import React from 'react';
import { connect } from 'react-redux';

const Game = () => (
  <div>
    <form onSubmit={(e)=>{
        e.preventDefault();

        let userGuess = e.target.userGuess.value;
    }}>
      <input name="userGuess" type="text"/>
    <button type= "submit">Guess</button>
    </form>
  </div>

)

  const mapDispatchToProps = (dispatch) => ({
    submitGuess: () => 
  })


export default connect(null, mapDispatchToProps)(Game)
