import { Container, Typography, Tabs, Tab, Box } from "@mui/material";
import { useState } from "react";

import MarcarAsistencia from "../components/MarcarAsistencia";
import AsistenciaHoy from "../components/AsistenciaHoy";
import HistorialAsistencia from "../components/HistorialAsistencia";

export default function AsistenciaDashboard() {
  const [tab, setTab] = useState(0);

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 3, mb: 2 }}>
        Módulo de Asistencia
      </Typography>

      <Tabs value={tab} onChange={(e, v) => setTab(v)}>
        <Tab label="Marcar Asistencia" />
        <Tab label="Asistencia de Hoy" />
        <Tab label="Historial" />
      </Tabs>

      <Box sx={{ mt: 3 }}>
        {tab === 0 && <MarcarAsistencia />}
        {tab === 1 && <AsistenciaHoy />}
        {tab === 2 && <HistorialAsistencia />}
      </Box>
    </Container>
  );
}
