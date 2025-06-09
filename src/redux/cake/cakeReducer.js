import { BUY_CAKE } from "./actionTypes";

const initialState = {
    numberOfCakes: 10,
}

const reducer = (state = initialState, action) => {
  switch(action.type){ 
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
}

export default reducer