import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div>
      <h2>Panel Principal</h2>
      <p>Bienvenido: {localStorage.getItem("username")} </p>
      <ul>
      <li><Link to="/estudiantes-list">ver Estudiantes</Link></li>
      <li><Link to="/estudiante-form">registrar Estudiante</Link></li>
      <li><Link to="/estudiante-cuotas">ver Cuotas</Link></li>
      <li><Link to="/grados-list">ver Grados</Link></li>
      <li><Link to="/grados-form">registrar Grado</Link></li>
      </ul>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        Cerrar Sesión
      </button>
    </div>
  );
}
