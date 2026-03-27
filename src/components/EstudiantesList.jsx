import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  CircularProgress,
  Box,
  Tooltip,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useEffect, useState } from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";

export const EstudiantesList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [estudiantes, setEstudiantes] = useState([]);

  const navigate = useNavigate();

  // 🔹 Cargar estudiantes
  useEffect(() => {
    api
      .get("/estudiantes")
      .then((res) => {
        setEstudiantes(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar los estudiantes");
        setLoading(false);
      });
  }, []);





  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  // 🔹 ERROR
  if (error) {
    return (
      <Typography color="error" variant="h6" align="center" mt={4}>
        {error}
      </Typography>
    );
  }

  // 🔹 RENDER NORMAL
  return (
    <TableContainer component={Paper}>
      <Typography variant="h5" sx={{ p: 2 }}>
        Listado de Estudiantes
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Carné</b></TableCell>
            <TableCell><b>Nombre</b></TableCell>
            <TableCell><b>Grado</b></TableCell>
            <TableCell align="center"><b>Acciones</b></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {estudiantes.map((e) => (
            <TableRow key={e.id} hover>
              <TableCell>{e.carne}</TableCell>
              <TableCell>
                {e.primer_nombre} {e.primer_apellido}
              </TableCell>
              <TableCell>
                {e.grado|| "—"}
              </TableCell>

              <TableCell align="center">
                <Tooltip title="Ver cuotas">
                  <IconButton
                    color="primary"
                    onClick={() => navigate("/estudiante-cuotas")}
                  >
                    <VisibilityIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Eliminar">
                  <IconButton color="error">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EstudiantesList;
