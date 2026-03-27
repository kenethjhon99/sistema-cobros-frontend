import {  Routes, Route, Navigate } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import MainLayout from "./Layouts/MainLayout";

import Login from "./pages/Login";
import GradosList from "./components/GradosList";
import EstudianteForm from "./components/EstudianteForm";
import EstudiantesList from "./components/EstudiantesList";
import GradosForm from "./components/GradosForm";
import EstudianteCuotas from "./components/EstudianteCuota";
import Dashboard from "./pages/Dashboard";
import AsistenciaDashboard from "./pages/AsistenciaDashboard";

function App() {
  return (
    
      <Routes>
        
        {/* Rutas publicas */}
        <Route
          path="/login"
          element={<Login />}
        />
        {/* Rutas privadas */}
        <Route
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
         >
          <Route
            path="/dashboard"
            element={<Dashboard />} />
            <Route
            path="/estudiantes-list"
            element={<EstudiantesList />} />
          <Route
            path="/estudiante-form"
            element={<EstudianteForm />} />
          <Route
            path="/estudiante-cuotas"
            element={<EstudianteCuotas />} />
          <Route
            path="/grados-list"
            element={<GradosList />} />
          <Route
            path="/grados-form"
            element={<GradosForm />} />
          <Route
            path="/asistencia"
            element={<AsistenciaDashboard />} />
        </Route>
        {/* redireccionar a login si la ruta no existe */}
        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
  );
}

export default App;
