import React from 'react';
import { connect } from 'react-redux';


const Guesses = ({bestGuessCount, attemtps}) => (
  <div>
    <h2>Current Best guesses</h2>
    <p>{bestGuessCount}</p>
    <h2>Current game total</h2>
    <p>{attemtps}</p>
  </div>
)
const mapStateToProps = (state) => ({
  bestGuessCount: state.bestCount,
  attemtps: state.guessCount
})
export default connect (mapStateToProps)(Guesses)
