const initialState = {
  guesses: [],
  randomNumber: 0
}

const game = (state = initialState, action) => {
  switch(action.type) {
    case 'GENERATE_RANDOM_NUMBER':
      return {
        ...state,
        randomNumber: Math.random()
      }
      case 'SUBMIT_ANSWER':
        return {
          ...state,
          guesses: state.guesses.concat(userGuess)
        }

    default:
      return state
  }
}


export default game
