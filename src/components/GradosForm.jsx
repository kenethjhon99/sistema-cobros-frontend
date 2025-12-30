//crear grados
import { useState } from "react";
import { api } from "../api/axios";

export const GradosForm = () => {
  const [form, setForm] = useState({
    nombre: "",
    nivel: "",
  });
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/grados", form);
        console.log("Grado creado:", res.data);
        alert(`Grado creado con ID ${res.data.id}`);
    } catch (error) {
      console.error("Error creando grado:", error);
      alert("Error creando grado");
    }
    };
    return (
    <form onSubmit={handleSubmit}>
      <h2>Registrar Grado</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={form.nombre}
        onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        />
        <br />
        <input
        type="text"
        placeholder="Nivel"
        value={form.nivel}
        onChange={(e) => setForm({ ...form, nivel: e.target.value })}
      />
      <br />
        <button type="submit">Registrar Grado</button>
        <br />
        <button onClick={() => window.location.href = "/dashboard"}>Volver al Dashboard</button>
    </form>
  );
}
export default GradosForm;