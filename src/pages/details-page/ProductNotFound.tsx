// @packages
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import Typography from "@mui/material/Typography";

const ProductNotFound = () => (
  <Container sx={{ py: [5, 10] }}>
    <Box>
      <Typography gutterBottom variant="h4" display="inline-flex">
        Product not found
      </Typography>
    </Box>
    <Typography>
      Maybe the page you are looking for has been removed, or you typed in the
      wrong URL
    </Typography>
  </Container>
);

export default ProductNotFound;
