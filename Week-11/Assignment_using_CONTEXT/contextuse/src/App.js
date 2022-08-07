import React, { useState } from 'react';
import './App.css';
import StepCounter from './StepCounter';
import OnOff from './OnOff';

export default function App() {
  const [state, setState] = useState(true);
  return (
    <>
      <div className="toggle_button">
        <button onClick={() => setState(!state)}>
          {state ? 'Step Counter' : 'On Off'}
        </button>
      </div>
      <div className="main_view">
        <br />
        <div>{state ? <OnOff /> : <StepCounter />}</div>
      </div>
    </>
  );
}
