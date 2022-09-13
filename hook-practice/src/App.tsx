import React from 'react';
// import './App.css';
import { useCounter } from './hook/hooks';

function App() {
  const [count, setCount, incrementCount, decrementCount] = useCounter();
  return (
    <React.Fragment>
      <p>{count}</p>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </React.Fragment>
  )
}

export default App;
