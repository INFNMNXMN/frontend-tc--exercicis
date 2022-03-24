import Graella from "../Graella/Graella";
import Comptador from "../Comptador/Comptador";
import ToggleButton from "../ToggleButton";
import NewcounterRedux from "../newcounterRedux/App";
import Calculadora from "../Calculadora/Calculadora";

const llista = [
  { path: "graella", titol: "Graella de fotos", element: <Graella /> },
  { path: "comptador", titol: "Comptador", element: <Comptador /> },
  { path: "toggle-button", titol: "Toggle button", element: <ToggleButton /> },
  {
    path: "newcounter-redux",
    titol: "Comptador Redux",
    element: <NewcounterRedux />,
  },
  { path: "calculadora", titol: "Calculadora", element: <Calculadora /> },
];
export default llista;
