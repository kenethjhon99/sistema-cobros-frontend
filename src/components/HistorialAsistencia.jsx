import {
  Box, TextField, Button, Table,
  TableBody, TableCell, TableHead, TableRow
} from "@mui/material";
import { useState } from "react";
import { api } from "../api/axios";

export default function HistorialAsistencia() {
  const [personaId, setPersonaId] = useState("");
  const [rows, setRows] = useState([]);

  const buscar = async () => {
    const res = await api.get(`/asistencia/persona/${personaId}`);
    setRows(res.data);
  };

  return (
    <Box>
      <TextField
        label="ID Persona"
        value={personaId}
        onChange={(e) => setPersonaId(e.target.value)}
      />
      <Button onClick={buscar}>Buscar</Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Fecha</TableCell>
            <TableCell>Hora</TableCell>
            <TableCell>Tipo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r, i) => (
            <TableRow key={i}>
              <TableCell>{r.fecha}</TableCell>
              <TableCell>{r.hora}</TableCell>
              <TableCell>{r.tipo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
}
