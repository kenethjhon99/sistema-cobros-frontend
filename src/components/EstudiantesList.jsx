import { useEffect, useState } from "react";
import { api } from "../api/axios";

export const EstudiantesList = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  useEffect(() => {
    api
      .get("/estudiantes")
      .then((response) => {
        setEstudiantes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching estudiantes:", error);
      });
  }, []);

  //mostrar el grado en lugar del id del grado
  const fetchGradoNombre = async (gradoId) => {
    try {
      const response = await api.get(`/grados/${gradoId}`);
      return response.data.nombre;
    } catch (error) {
      console.error("Error fetching grado nombre:", error);
      return "Desconocido";
    }
  };

  return (
    <div>
      <h2>Lista de Estudiantes</h2>
      <ul>
        {estudiantes.map((estudiante) => (
          <li key={estudiante.id}>
            {estudiante.primer_nombre} {estudiante.segundo_nombre}{" "}
            {estudiante.primer_apellido} {estudiante.segundo_apellido}
            {" - Carné: "} {estudiante.carne}
            {", Grado: "} {estudiante.grado}
            {", CUI: "} {estudiante.cui}
            {". Creado por: "} {estudiante.usuarioCreacion}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default EstudiantesList;
