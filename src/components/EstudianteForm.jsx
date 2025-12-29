import { useState, useEffect } from "react";
import { api } from "../api/axios";

export  const EstudianteForm = () => {
  const [form, setForm] = useState({
    cui: "",
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    grado_id: "",
  });
  //recorrer grados para seleccionar el grado
  const [grados, setGrados] = useState([]);
    useEffect(() => {
    api
      .get("/grados")
      .then((response) => setGrados(Array.isArray(response.data) ? response.data : []))
      .catch((error) => console.error("Error fetching grados:", error));
  }, []);


  const handlSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/estudiantes", form);
      console.log("Estudiante creado:", res.data);
      alert(`Estudiante creado con carné ${res.data.carne}`);
    } catch (error) {
      console.error("Error creando estudiante:", error);
      alert("Error creando estudiante");
    }
  };
  return (
    <form onSubmit={handlSubmit}>
        <h2>Registrar Estudiante</h2>
      <input
        type="text"
        placeholder="CUI"
        value={form.cui}
        onChange={(e) => setForm({ ...form, cui: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Primer Nombre"
        value={form.primer_nombre}
        onChange={(e) => setForm({ ...form, primer_nombre: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Segundo Nombre"
        value={form.segundo_nombre}
        onChange={(e) => setForm({ ...form, segundo_nombre: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Primer Apellido"
        value={form.primer_apellido}
        onChange={(e) => setForm({ ...form, primer_apellido: e.target.value })}
      />
      <br />
      <input
        type="text"
        placeholder="Segundo Apellido"
        value={form.segundo_apellido}
        onChange={(e) => setForm({ ...form, segundo_apellido: e.target.value })}
      />
      <br />
      <select
        value={form.grado_id}
        onChange={(e) => setForm({ ...form, grado_id: e.target.value })}
      >
        {grados.map((grado) => (
          <option key={grado.id} value={grado.id}>
            {grado.nombre} - {grado.nivel}
          </option>
        ))}
      </select>
      <br />
      <button type="submit">Registrar Estudiante</button>
    </form>
  );
};

export default EstudianteForm;