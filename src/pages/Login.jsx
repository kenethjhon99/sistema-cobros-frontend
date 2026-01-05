import { useState } from "react";
import { api } from "../api/axios";
import axios from "axios";
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
      const response = await api.post("http://localhost:3000/api/auth/login", {
        usuario,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError("Error de autenticación. Por favor, verifica tus credenciales.");
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
          <Paper
            elevation={4}
            sx={{ mt: 8, p: 4 }}
          >
            <Typography
              variant="h5"
              align="center"
              gutterBottom
            >
              Iniciar Sesión
            </Typography>

            <TextField
              label="Usuario"
              fullWidth
              margin="normal"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />

            <TextField
              label="Contraseña"
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
              onClick={handleSubmit }

            >
              Entrar
            </Button>
          </Paper>
        </Box>
        {error && (
          <Alert
            severity="error"
            sx={{ mt: 2 }}
          >
            {error}
          </Alert>
        )}
      </Container>
    </div>
  );
};

export default Login;
