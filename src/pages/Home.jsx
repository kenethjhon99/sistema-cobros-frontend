import GradosList from "../components/GradosList";
import EstudianteForm from "../components/EstudianteForm";
import EstudiantesList from "../components/EstudiantesList";
import GradosForm from "../components/GradosForm";
import EstudianteCuotas from "../components/EstudianteCuota";
export const Home = () => {
  return (
    <div>
      <h1>Sistema de Cobros - Home</h1>
      <EstudianteForm />
      <GradosList />
      <GradosForm />
      <EstudiantesList />
      <EstudianteCuotas />
    </div>
  );
};

export default Home;