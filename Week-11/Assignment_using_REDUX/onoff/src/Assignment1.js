import React from 'react'
import { addStep,reset} from "./action/index";
import { useSelector, useDispatch } from "react-redux";

function Assignment1() {
  const step = useSelector((state) => state.stepCount);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="card">
        <span>You've walked {step} steps today!</span>
        <br />
        <div className="button_div">
          <button onClick={() => dispatch(addStep())}>Add Step</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Assignment1;