// @packages
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    background: {
      default: "#EBEBEB",
    },
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
