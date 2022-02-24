// @packages
import Box from "@mui/material/Box";
import React, { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export interface Props {
  id: string;
  isFullPage: boolean;
  size: number;
}

const fullPage = {
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  minHeight: "calc(100vh - 100px)",
};

const ProgressComponent: FC<Props> = ({ id, size, isFullPage }) => (
  <Box id={id} sx={isFullPage ? fullPage : null}>
    <CircularProgress color="secondary" size={size} />
  </Box>
);

export default ProgressComponent;
