// @packages
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";

// @scripts
import MasterPage from "./pages/master-page";
import theme from "./styles/theme";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MasterPage />
    </ThemeProvider>
  </QueryClientProvider>,
  document.querySelector("#root")
);
