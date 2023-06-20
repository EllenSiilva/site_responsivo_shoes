import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8C52FF",
      light: "#B799F2",
      lighter: "#ece6f7",
      dark: "#362a4c",
    },
    secondary: {
      main: "#7E7296",
    },
    error: {
      main: "#a91c1c",
    },
    text: {
      primary: "#222",
      light: "#fff",
    },
    warning: {
      main: "#ff9800",
    },
    white: {
      main: "#fff",
    },
  },

  typography: {
    subtitle1: {
      fontSize: 12,
    },
    body1: {
      fontSize: 14,
    },
  },
});

export default theme;
