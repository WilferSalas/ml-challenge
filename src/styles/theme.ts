import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFF159",
    },
    secondary: {
      main: "#1F6DFF",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
