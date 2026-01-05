import {
    
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ drawerWidth }) {
  const navigate = useNavigate();

  const menu = [
    { text: "Inicio", path: "/dashboard" },
    { text: "Estudiantes", path: "/estudiantes-list" },
    { text: "Registrar Estudiante", path: "/estudiante-form" },
    { text: "Cuotas", path: "/estudiante-cuotas" },
    { text: "Grados", path: "/grados-list" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        [`& .MuiDrawer-paper`]: { width: drawerWidth },
      }}
    >
      <Toolbar  />
      <List  >
        {menu.map((item) => (
          <ListItem key={item.text} disablePadding  >
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
