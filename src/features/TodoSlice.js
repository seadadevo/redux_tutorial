import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';
import { fetchUser, usersReducer } from './ApiAsync';

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

export function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First Redux Action"
  };
}

export function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: "second Redux Action"
    }
}


const initialCakesState = {
    numberOfCakes: 10,
} 
const initialIceCreamsState = {
    numberOfIceCreams: 20,
}

const cakeReducer = (state = initialCakesState, action) => {
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
const iceCreamReducer = (state = initialIceCreamsState, action) => {
  switch(action.type){ 
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: state.numberOfIceCreams - 1,
      };
    default:
      return state;
  }
}



const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: usersReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
console.log(store.getState());
const unsubscibe = store.subscribe (() => {
  const state = store.getState(); 
  console.log(state.users)
}) 


store.dispatch(fetchUser())

unsubscibe()
export default store;
 