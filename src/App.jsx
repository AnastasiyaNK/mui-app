import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Switch,
  FormControlLabel,
  CssBaseline,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const App = () => {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleThemeChange = () => setDarkMode(!darkMode);

  // Створення теми
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: darkMode ? "#90caf9" : "#1976d2",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Нормалізація стилів */}
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My app
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={darkMode}
                  onChange={handleThemeChange}
                  color="default"
                />
              }
              label={darkMode ? "Dark theme" : "Light theme"}
              sx={{ color: "inherit" }}
            />
          </Toolbar>
        </AppBar>

        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Welcome to the app!
          </Typography>
          <Typography paragraph>
            This is a demo app with a theme switcher.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            onClick={handleOpen}
            sx={{ mt: 2 }}
          >
            Open dialog
          </Button>
        </Container>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Information window</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Current theme: {darkMode ? "Dark" : "Light"}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </ThemeProvider>
  );
};

export default App;
