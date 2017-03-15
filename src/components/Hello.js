import React from 'react';
import { connect } from 'react-redux';

const Hello = ({ correctNumber }) => (
  <div>
    <h1>{ correctNumber }</h1>
  </div>
)

const mapStateToProps = (state) => ({
  correctNumber: state.randomNumber
})

export default connect(mapStateToProps)(Hello)
