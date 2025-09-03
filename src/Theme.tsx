import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#F3F4FF" },
    secondary: { main: "#4D44B5" },
    background: { default: "#F3F4FF", paper: "#4D44B5" },
    text: { primary: "#A098AE",secondary: "#303972"  },
  },

  cssVariables: true,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
