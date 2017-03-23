const initialState = {
  guesses: [],
  randomNumber: 0,
  message: '',
  guessCount:'',
  bestCount: []
}

const game = (state = initialState, action) => {
  switch(action.type) {
    case 'GENERATE_RANDOM_NUMBER':
      return {
        ...state,
        randomNumber: Math.floor(Math.random() * (100 - 1) + 1)

      }
      case 'SUBMIT_ANSWER':
        return {
          ...state,
          guesses: action.userGuess
        }
        case 'DISPLAY_FEEDBACK':
          return{
            ...state,
            message: action.displayMessage
          }

    default:
      return state
      }

}


export default game
