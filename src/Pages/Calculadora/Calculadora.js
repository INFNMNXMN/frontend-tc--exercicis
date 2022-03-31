import { useState } from "react";
import "./Calculadora.css";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function Button({ onPressed, children }) {
  return <button onClick={onPressed}> {children}</button>;
}

function Calculadora() {
  const [antic, setAntic] = useState(0);
  const [operacio, setOperacio] = useState("");
  const [novaEntrada, setNovaEntrada] = useState(false);
  const [display, setDisplay] = useState(0);
  const entraNumero = (numero) => {
    console.log("num", numero);
    setAntic(display);
    if (novaEntrada) {
      console.log("in", novaEntrada);
      setDisplay(numero);
    } else {
      setDisplay(numero);
      setNovaEntrada(false);
    }
  };
  const entraOperacio = (operacio) => {
    setNovaEntrada(true);
    setAntic(display);
    if (!novaEntrada) calcular();
    setOperacio(operacio);
  };
  const calcular = () => {
    if (operacio === "+") setDisplay(antic + display);
    if (operacio === "-") setDisplay(antic - display);
    if (operacio === "*") setDisplay(antic * display);
    if (operacio === "/") setDisplay(antic / display);
  };

  return (
    <div className="Calculadora">
      <div className="Display">{display}</div>
      <div className="Numeros">
        {numeros.map((numero) => (
          <Button onPressed={() => entraNumero(numero)} key={numero}>
            {numero}
          </Button>
        ))}
      </div>
      <br />
      <div className="Numeros">
        <button onClick={() => entraOperacio("+")}>+</button>
        <button onClick={() => entraOperacio("-")}>-</button>
        <button onClick={() => entraOperacio("*")}>*</button>
        <button onClick={() => entraOperacio("/")}>/</button>
        <br />
        <button onClick={calcular}>=</button>
      </div>
    </div>
  );
}

export default Calculadora;
