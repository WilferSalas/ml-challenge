// @packages
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// @scripts
import BreadcrumbsComponent from "../../components/breadcrumbs-component";
import ProgressComponent from "../../components/progress-component";
import ProductsNotFound from "./ProductsNotFound";
import { useFetchSearchProducts } from "../../api";
import { Tooltip } from "@mui/material";

// @interfaces
import { Product } from "../../interfaces";

const SearchResultsPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const { data, isLoading } = useFetchSearchProducts(search);

  if (isLoading)
    return <ProgressComponent id="results-page" isFullPage size={50} />;

  if (!data) return <ProductsNotFound />;

  const currency = (currency: string, price: number) => {
    const formatter = new Intl.NumberFormat("sfb", {
      style: "currency",
      currency: currency,
      currencyDisplay: "narrowSymbol",
    });

    return formatter.format(price);
  };

  const handleOnClick = (id: string) => {
    navigate(`/items/${id}`);
  };

  return (
    <Container id="search-results-page">
      <BreadcrumbsComponent id="search-results-page" items={data.categories} />
      <Paper>
        {data.items.map((item: Product) => [
          <Stack direction="row" spacing={2} key={item.id} sx={{ p: 2 }}>
            <Box
              alt={item.title}
              component="img"
              onClick={() => handleOnClick(item.id)}
              src={item.picture}
              sx={{ maxHeight: [110, 150], cursor: "pointer" }}
            />
            <Box sx={{ p: 2 }}>
              <Stack direction="row">
                <Typography
                  gutterBottom
                  onClick={() => handleOnClick(item.id)}
                  sx={{ cursor: "pointer" }}
                  variant="h5"
                >
                  {currency(item.price.currency, item.price.amount)}
                </Typography>
                {item.free_shipping && (
                  <Tooltip title="Envio gratis">
                    <AirportShuttleIcon
                      color="success"
                      fontSize="small"
                      sx={{ mt: 0.7, ml: 2 }}
                    />
                  </Tooltip>
                )}
              </Stack>
              <Typography
                onClick={() => handleOnClick(item.id)}
                sx={{ cursor: "pointer" }}
              >
                {item.title}
              </Typography>
            </Box>
          </Stack>,
          <Divider key={`${item.id}-divider`} />,
        ])}
      </Paper>
    </Container>
  );
};

export default SearchResultsPage;
