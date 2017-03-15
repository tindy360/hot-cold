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

    default:
      return state
  }
}

export default game
