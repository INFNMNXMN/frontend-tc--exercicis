import Graella from "./Graella/Graella";
import Comptador from "./Comptador/Comptador";
import ToggleButton from "./TuggleButton/ToggleButton";
import { CounterRedux } from "./NewcounterRedux/CounterRedux";
import Calculadora from "./Calculadora/Calculadora";

const llista = [
  { path: "graella", titol: "Graella de fotos", element: <Graella /> },
  { path: "comptador", titol: "Comptador", element: <Comptador /> },
  { path: "toggle-button", titol: "Toggle button", element: <ToggleButton /> },
  {
    path: "counter-redux",
    titol: "Comptador redux",
    element: <CounterRedux />,
  },
  { path: "calculadora", titol: "Calculadora", element: <Calculadora /> },
];
export default llista;
