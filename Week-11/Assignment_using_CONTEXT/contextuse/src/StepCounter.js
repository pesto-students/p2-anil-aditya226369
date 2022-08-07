import React from 'react';
import './App.css';
import { useContext, createContext, useState } from 'react';
const Counter = createContext();
const StepCounter = () => {
  const [count, setcount] = useState(0);
  return (
    <Counter.Provider value={{ count, setcount }}>
      <span>You've walked {count} steps today!</span>
      <Logic />
    </Counter.Provider>
  );
};
export default StepCounter;
const Logic = () => {
  const step = useContext(Counter);
  return (
    <div className="content">
      <button onClick={() => step.setcount(step.count + 1)}>Add Step</button>
      <button onClick={() => step.setcount(0)}>Reset</button>
    </div>
  );
};