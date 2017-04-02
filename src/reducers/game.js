const initialState = {
    guesses: [],
    randomNumber: 0,
    message: '',
    guessCount: 0,
    attempts: 0,
    hidden: true
}

const game = (state = initialState, action) => {
    switch (action.type) {
        case 'GENERATE_RANDOM_NUMBER':
            return {
                ...state,
                randomNumber: Math.floor(Math.random() * (100 - 1) + 1)
            }

        case 'SUBMIT_ANSWER':
            return {
                ...state,
                guesses: action.userGuess,
            }

        case 'DISPLAY_FEEDBACK':
            return {
                ...state,
                message: action.displayMessage
            }

         case 'TOGGLE_DIV':
             return {
                ...state,
               hidden: !state.hidden
              }

          case 'GUESS_COUNT':
              return {
                ...state,
                guessCount: state.guessCount +1
                }

           case 'LOAD_GUESSES':
                return{
                ...state,
                attempts: action.attempts
                    }

        default:
            return state
    }

}

export default game
