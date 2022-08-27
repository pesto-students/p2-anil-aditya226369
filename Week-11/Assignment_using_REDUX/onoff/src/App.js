import "./App.css";
import { tog ,addStep,reset} from "./action/index";
import { useSelector, useDispatch } from "react-redux";
import {useState} from 'react';
function App() {
  const toggle = useSelector((state) => state.onOff);
  const step = useSelector((state) => state.stepCount);
  const dispatch = useDispatch();
  const [view,setView] = useState(true);
  const changeView=()=>{
      setView(!view);
  }
  return (
    <div className="mainView">
    <button className="toggle" onClick={changeView}>{view? "Step Counter":'On Off switch'}</button>
    {view ? <div className="assingment1">
      <div className={`main ${toggle ? "lit" : "dark"}`}>
        <h4>The room is {toggle ? "lit" : "dark"}</h4>
        <br />
        <button onClick={() => dispatch(tog())}>flip</button>
    </div>
    </div> :
    <div className="App">
      <div className="card">
        <span><h4>You've walked {step} steps today!</h4></span>
        <br />
        <div className="button_div">
          <button onClick={() => dispatch(addStep())}>Add Step</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
    </div>}
    </div>
  );
}

export default App;
