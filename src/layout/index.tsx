// @packages
import React from "react";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <Box id="layout">
    <Outlet />
  </Box>
);

export default Layout;
