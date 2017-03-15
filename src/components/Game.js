import React from 'react';
import { connect } from 'react-redux';

const Game = () => (
  <div>
    <form action="submit"></form>
    <button type= "submit">Guess</button>
  </div>
)
export default connect()(Game)
