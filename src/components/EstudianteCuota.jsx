import { useEffect, useState } from "react";
import { api } from "../api/axios";

export const EstudianteCuotas = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [cuotas, setCuotas] = useState([]);
  const [estudianteId, setEstudianteId] = useState("");

  // Cargar estudiantes
  useEffect(() => {
    api.get("/estudiantes")
      .then(res => setEstudiantes(res.data))
      .catch(err => console.error(err));
  }, []);

  // Cargar cuotas cuando se seleccione estudiante
  const handleSelect = async (id) => {
    setEstudianteId(id);
    try {
      const res = await api.get(`/estudiantes/${id}/cuotas`);
      setCuotas(res.data);
    } catch (err) {
      console.error("Error obteniendo cuotas:", err);
    }
  };
  const [cuotaSeleccionada, setCuotaSeleccionada] = useState(null); 
  const [pago, setPago] = useState({
    monto: "",
    observacion: "",
  });
  const abrirModalPago = (cuota) => {
    setCuotaSeleccionada(cuota);
    setPago({ monto: cuota.monto, observacion: "" });
  }
    const pagarCuota = async () => {
    try {
      await api.put(`/cuotas/${cuotaSeleccionada.id}/pagar`,{
        monto_pagado: parseFloat(pago.monto),
        observacion: pago.observacion,
      });
      alert("Cuota pagada con éxito");

      setCuotas(cuotas.map(c => c.id === cuotaSeleccionada.id ? { ...c, estado: "pagado" } : c));
      setCuotaSeleccionada(null);
    }
    catch (err) {
      console.error("Error pagando cuota:", err);
      alert("Error pagando cuota");

      }
  };

  return (
    <div>
      <h2>Estado de Pagos del Estudiante</h2>
      <select value={estudianteId} onChange={(e) => handleSelect(e.target.value)}>
        <option value="">Seleccione un estudiante</option>
        {estudiantes.map(e => (
          <option key={e.id} value={e.id}>
            {e.primer_nombre} {e.primer_apellido} - {e.carne}
          </option>
        ))}
      </select>

      {cuotas.length > 0 && (
        <table border="1" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Mes</th>
              <th>Año</th>
              <th>Monto</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {cuotas.map((c) => (
              <tr key={c.id}>
                <td>{c.tipo_pago}</td>
                <td>{c.mes || "Único"}</td>
                <td>{c.anio}</td>
                <td>Q {Number(c.monto).toFixed(2)}</td>
                <td>{c.estado==="pagado" ? ( "pagado") : (
                    <button onClick={()=> abrirModalPago(c)}>Pagar</button>
                ) 
                }</td>
              </tr>
            ))}
          </tbody>
      
        </table>
        
      )}
      {cuotaSeleccionada && (
  <div className="modal" style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0,0,0,0.6)", display: "flex", justifyContent: "center", alignItems: "center" }}>
    <div className="modal-content" style={{ background: "white", padding: 20, borderRadius: 8 }}>
      <h3>Pagar Cuota</h3>
      <p>Tipo: {cuotaSeleccionada.tipo_pago}</p>
      <p>Monto: Q {Number(cuotaSeleccionada.monto).toFixed(2)}</p>

      <input
        type="number"
        placeholder="Monto a pagar"
        value={pago.monto}
        onChange={(e) => setPago({ ...pago, monto: e.target.value })}
      />
      <br />

      <input
        type="text"
        placeholder="Observación"
        value={pago.observacion}
        onChange={(e) => setPago({ ...pago, observacion: e.target.value })}
      />
      <br />

      <button onClick={pagarCuota}>Confirmar Pago</button>
      <button onClick={() => setCuotaSeleccionada(null)}>Cancelar</button>
    </div>
  </div>
)}

    </div>
  );
};

export default EstudianteCuotas;
