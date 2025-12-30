import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

import Login from "./pages/Login";
import GradosList from "./components/GradosList";
import EstudianteForm from "./components/EstudianteForm";
import EstudiantesList from "./components/EstudiantesList";
import GradosForm from "./components/GradosForm";
import EstudianteCuotas from "./components/EstudianteCuota";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />
        {/* Rutas publicas */}
        <Route
          path="/login"
          element={<Login />}
        />
        {/* Rutas privadas */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/estudiante-form"
          element={
            <PrivateRoute>
              <EstudianteForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/grados-list"
          element={
            <PrivateRoute>
              <GradosList />
            </PrivateRoute>
          }
        />
        <Route
          path="/grados-form"
          element={
            <PrivateRoute>
              <GradosForm />
            </PrivateRoute>
          }
        />
        <Route
          path="/estudiantes-list"
          element={
            <PrivateRoute>
              <EstudiantesList />
            </PrivateRoute>
          }
        />
        <Route
          path="/estudiante-cuotas"
          element={
            <PrivateRoute>
              <EstudianteCuotas />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
