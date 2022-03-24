import { useState } from "react";
export default function ToggleButton() {
  const [color, setcolor] = useState("red");
  const estaPremut = color !== "red";

  const toggle = () => {
    if (color === "red") setcolor("cyan");
    else setcolor("red");
  };

  return (
    <>
      <button style={{ background: color }} onClick={toggle}>
        Toggle Me
      </button>
      {estaPremut ? <p>Esta premut</p> : <p>No esta premut</p>}
    </>
  );
}
