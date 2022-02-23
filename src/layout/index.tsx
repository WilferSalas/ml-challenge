// @packages
import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

// @scrpts
import HeaderComponent from "../components/header-component";

const Layout = () => (
  <Box id="layout">
    <HeaderComponent />
    <Outlet />
  </Box>
);

export default Layout;
