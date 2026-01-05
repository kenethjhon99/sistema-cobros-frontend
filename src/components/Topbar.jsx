import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Topbar({ drawerWidth }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: 1201, ml: `${drawerWidth}px` }}
    >
      <Toolbar>
        <Typography variant="h6"  sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Sistema de Cobros Educativos
        </Typography>

        <Typography sx={{ mr: 2 }}>
          {localStorage.getItem("username")}
        </Typography>

        <Button color="inherit" onClick={logout} sx={{ fontWeight: 'bold', color: 'white' }} >
          Cerrar sesión
        </Button>
      </Toolbar>
    </AppBar>
  );
}
