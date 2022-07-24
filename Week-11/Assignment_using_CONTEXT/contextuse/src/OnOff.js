import React from 'react';
import './App.css';
import { createContext, useContext, useState } from 'react';

const ToggleContext = createContext();

const OnOff = () => {
  const [state, setState] = useState(true);
  return (
    <ToggleContext.Provider value={{ state, setState }}>
      <div className={`content ${state ? false : 'dark'}`}>
        <MainWorking />
      </div>
    </ToggleContext.Provider>
  );
};
export default OnOff;

const MainWorking = () => {
  const toggle = useContext(ToggleContext);
  return (
    <div className="content">
      <span>The room is {toggle.state ? 'lit' : 'dark'}</span>
      <br />
      <button onClick={() => toggle.setState(!toggle.state)}>FLIP</button>
    </div>
  );
};