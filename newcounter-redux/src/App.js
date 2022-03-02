import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
  resetCounter,
} from "./actions/counterActions";

function App() {
  const count = useSelector((store) => store.counterReducer.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <p> {count}</p>
        <button onClick={() => dispatch(increaseCounter(1))}>
          IncreaseCounter
        </button>
        <button onClick={() => dispatch(increaseCounter(5))}>
          Increase counter + 5
        </button>
        <button onClick={() => dispatch(decreaseCounter(1))}>
          Decrease counter
        </button>
        <button onClick={() => dispatch(decreaseCounter(5))}>
          Decrease counter-5
        </button>
        <button onClick={() => dispatch(resetCounter())}>RESET</button>
      </header>
    </div>
  );
}

export default App;
