// @packages
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import React from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";
import { useQueryClient } from "react-query";

// @scripts
import BreadcrumbsComponent from "../../components/breadcrumbs-component";
import ProgressComponent from "../../components/progress-component";
import ProductNotFound from "./ProductNotFound";
import { useFetchProduct } from "../../api";

// @interfaces
import { Product } from "../../interfaces";

const DetailsPage = () => {
  const queryClient = useQueryClient();
  const { id } = useParams();
  const { data, isLoading } = useFetchProduct(id);

  const cachedData: any = queryClient.getQueryData(["products"], {
    exact: false,
  });

  if (isLoading)
    return <ProgressComponent id="details-page" isFullPage size={50} />;

  if (!data) return <ProductNotFound />;

  const formatter = new Intl.NumberFormat("sfb", {
    style: "currency",
    currency: data?.item?.price.currency || "USD",
    currencyDisplay: "narrowSymbol",
  });

  const {
    condition,
    description,
    id: idProduct,
    picture,
    price: { amount },
    sold_quantity,
    title,
  }: Product = data.item || {};

  return (
    <Container>
      <BreadcrumbsComponent id="details-page" items={cachedData?.categories} />
      <Paper id="home-page">
        <Grid container sx={{ padding: 5 }}>
          <Grid item xs={7} justifyContent="center" sx={{ display: "flex" }}>
            <Box
              component="img"
              alt={idProduct}
              src={picture}
              sx={{ maxWidth: 400 }}
            />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">
              {condition === "new" ? "Nuevo" : "Usado"} - {sold_quantity}
              vendidos
            </Typography>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: 600 }}>
              {title}
            </Typography>
            <Typography gutterBottom variant="h4" sx={{ mb: 5 }}>
              {formatter.format(amount)}
            </Typography>
            <Button color="secondary" fullWidth variant="contained">
              Comprar
            </Button>
          </Grid>
          <Grid item sx={{ mt: 8 }} xs={12}>
            <Typography gutterBottom variant="h5">
              Descripcion del producto
            </Typography>
            <Typography>{description}</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default DetailsPage;
