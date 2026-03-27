import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Alert
} from "@mui/material";
import { useState } from "react";
import { api } from "../api/axios";

export default function MarcarAsistencia() {
  const [personaId, setPersonaId] = useState("");
  const [tipo, setTipo] = useState("ENTRADA");
  const [msg, setMsg] = useState(null);

  const marcar = async () => {
    try {
      await api.post("/asistencia/marcar", {
        personaId,
        tipo
      });
      setMsg({ type: "success", text: "Asistencia registrada" });
    } catch (err) {
      setMsg({
        type: "error",
        text: err.response?.data?.message || "Error"
      });
    }
  };

  return (
    <Box maxWidth={400}>
      <Typography variant="h6">Marcar Asistencia</Typography>

      {msg && <Alert severity={msg.type}>{msg.text}</Alert>}

      <TextField
        fullWidth
        label="ID Persona / Huella"
        value={personaId}
        onChange={(e) => setPersonaId(e.target.value)}
        sx={{ mt: 2 }}
      />

      <TextField
        fullWidth
        select
        label="Tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        sx={{ mt: 2 }}
      >
        <MenuItem value="ENTRADA">Entrada</MenuItem>
        <MenuItem value="SALIDA">Salida</MenuItem>
      </TextField>

      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={marcar}
      >
        Registrar
      </Button>
    </Box>
  );
}
