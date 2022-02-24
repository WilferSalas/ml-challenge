// @packages
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import Typography from "@mui/material/Typography";

const ProductsNotFound = () => (
  <Container sx={{ py: [5, 10] }}>
    <Box>
      <Typography gutterBottom variant="h4" display="inline-flex">
        Products not found
      </Typography>
    </Box>
    <Typography>Try doing a different search</Typography>
  </Container>
);

export default ProductsNotFound;
