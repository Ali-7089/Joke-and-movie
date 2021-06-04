import  {GET_JOKES} from '../ActionType'

const initialstate ={
    jokes:[]
}


const JokeReducer = (state= initialstate , action) =>{
    switch (action.type) {
        case GET_JOKES:
          let copyjokes = [...state.jokes]
          copyjokes.push(action.payload)  
            return {
                ...state,
                jokes:copyjokes
            }
        default:
            return state
            
    }
}

export default JokeReducer;