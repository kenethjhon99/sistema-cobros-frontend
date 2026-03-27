import { useState, useEffect } from "react";
import { api } from "../api/axios";

export const EstudianteForm = () => {
  const [form, setForm] = useState({
    cui: "",
    primer_nombre: "",
    segundo_nombre: "",
    primer_apellido: "",
    segundo_apellido: "",
    grado_id: "",
  });
  const [grados, setGrados] = useState([]);

  useEffect(() => {
    api
      .get("/grados")
      .then((response) =>
        setGrados(Array.isArray(response.data) ? response.data : [])
      )
      .catch((error) => console.error("Error fetching grados:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/estudiantes", form);
      const sync = res.data.hikvisionSync;

      if (sync?.ok) {
        alert(
          `Estudiante creado con carne ${res.data.carne}. Usuario biometrico ${sync.employeeNo} listo en Hikvision para registrar huella.`
        );
      } else if (sync) {
        alert(
          `Estudiante creado con carne ${res.data.carne}, pero la sincronizacion Hikvision quedo pendiente. ${sync.message}`
        );
      } else {
        alert(`Estudiante creado con carne ${res.data.carne}`);
      }

      setForm({
        cui: "",
        primer_nombre: "",
        segundo_nombre: "",
        primer_apellido: "",
        segundo_apellido: "",
        grado_id: "",
      });
    } catch (error) {
      console.error("Error creando estudiante:", error);
      alert("Error creando estudiante");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
          <option value="">Seleccione un grado</option>
          {grados.map((grado) => (
            <option key={grado.id} value={grado.id}>
              {grado.nombre} - {grado.nivel}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Registrar Estudiante</button>
      </form>
      <button onClick={() => (window.location.href = "/dashboard")}>
        Volver al Dashboard
      </button>
    </div>
  );
};

export default EstudianteForm;
