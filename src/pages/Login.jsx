import { useState } from "react";
import { api } from "../api/axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  TextField,
  Container,
  Typography,
  Box,
  Alert,
  Paper,
} from "@mui/material";

const Login = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/auth/login", {
        usuario,
        password,
      });

      localStorage.setItem("token", response.data.token);
      localStorage.setItem(
        "username",
        response.data.user?.nombre || response.data.user?.usuario || usuario
      );

      if (response.data.user?.institucionId) {
        localStorage.setItem("institucionId", String(response.data.user.institucionId));
      }

      navigate("/dashboard");
    } catch {
      setError("Error de autenticacion. Por favor, verifica tus credenciales.");
    }
  };

  return (
    <div>
      <Container maxWidth="full">
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper elevation={4} sx={{ mt: 8, p: 4 }}>
            <Typography variant="h5" align="center" gutterBottom>
              Iniciar Sesion
            </Typography>

            <TextField
              label="Usuario"
              fullWidth
              margin="normal"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

            <TextField
              label="Contrasena"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2 }}
              onClick={handleSubmit}
            >
              Entrar
            </Button>
          </Paper>
        </Box>
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default Login;
