import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import "./index.css";
import App from "./App.jsx";

const Theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#9c27b0" },
    dark: { main: "#121212" },
  },
});

createRoot(document.getElementById("root")).render(
  <div style={{ backgroundColor: "#3fb7ebff", minHeight: "100vh" }}>
    <StrictMode>
      <BrowserRouter>
      <ThemeProvider theme={Theme}>

        <CssBaseline />
        <App />
      </ThemeProvider>
      </BrowserRouter>
    </StrictMode>
  </div>
);
