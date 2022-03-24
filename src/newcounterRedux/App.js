import { useState } from "react";

function App() {
  const counter = (state) => state + 1;
  const { count, setCount } = useState(0);

  return (
    <>
      <h1>Counter</h1>
      <div>{count}</div>
      <button onClick={() => setCount((state) => state + 1)}>+1</button>
    </>
  );
}

export default App;
