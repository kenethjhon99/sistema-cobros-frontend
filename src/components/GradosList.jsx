import { useEffect, useState } from "react";
import { api } from "../api/axios";

export const GradosList = () => {
  const [grados, setGrados] = useState([]);
  useEffect(() => {
    api
      .get("/grados")
      .then((response) => setGrados(Array.isArray(response.data) ? response.data : []))

      .catch((error) => console.error("Error fetching grados:", error));
  }, []);

  return (
    <div>
      <h2>Lista de Grados</h2>
      <ul>
        {grados.map((grado) => (
          <li key={grado.id}>
            {grado.nombre} ({grado.nivel})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GradosList;
