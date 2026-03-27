import {
  Table, TableBody, TableCell, TableHead,
  TableRow, Paper, CircularProgress
} from "@mui/material";
import { useEffect, useState } from "react";
import { api } from "../api/axios";

export default function AsistenciaHoy() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/asistencia/hoy")
      .then(res => setData(res.data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Persona</TableCell>
            <TableCell>Tipo</TableCell>
            <TableCell>Hora</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((a) => (
            <TableRow key={a.id}>
              <TableCell>{a.persona_tipo}</TableCell>
              <TableCell>{a.tipo}</TableCell>
              <TableCell>{a.hora}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
