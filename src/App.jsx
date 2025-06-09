import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from './features/TodoSlice';


 function App() {
  const numberOfCakes = useSelector(state => state.numberOfCakes); // جلب عدد الكيكات من الـ state
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of Cakes: {numberOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default App