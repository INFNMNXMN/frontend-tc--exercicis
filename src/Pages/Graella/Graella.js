import "./Graella.css";
import { useState } from "react";

export default function Graella() {
  const fotos = [
    "foto1.jpg",
    "foto2.jpg",
    "foto3.jpg",
    "foto4.jpg",
    "foto5.jpg",
    "foto6.jpg",
    "foto7.jpg",
    "foto8.jpg",
  ].map((foto) => process.env.PUBLIC_URL + "/" + foto);

  const [gran, setGran] = useState(false);

  if (gran)
    return (
      <div className="Graella-zoom">
        <img src={gran} alt="menu" onClick={() => setGran(false)} />
      </div>
    );
  return (
    <div className="Graella">
      {fotos.map((foto) => (
        <img
          key={foto}
          src={foto}
          alt="menu"  
          height="100"
          onClick={() => setGran(foto)}
        ></img>
      ))}
    </div>
  );
}
