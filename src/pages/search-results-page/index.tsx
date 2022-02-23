// @packages
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  return (
    <Container id="search-results-page">
      <Box sx={{ mt: 5 }}>ML Challenge search results page for: {search}</Box>
    </Container>
  );
};

export default SearchResultsPage;
