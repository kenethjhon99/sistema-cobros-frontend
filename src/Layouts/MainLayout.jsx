import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const drawerWidth = 240;

export default function MainLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar drawerWidth={drawerWidth} />
      <Topbar drawerWidth={drawerWidth} />
      {/* Main content area */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, mt: 8,  }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
