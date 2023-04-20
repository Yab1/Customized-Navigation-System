import { useState, useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { ProductContext } from "../../context/ProductContext";
import Product from "./product";

function Body() {
  const { productInfo } = useContext(ProductContext);

  return (
    <Container disableGutters maxWidth="lg">
      <Grid container spacing={3}>
        {/* {products.map((product) => (
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Product key={product.key} product={product} />
          </Grid>
        ))} */}
      </Grid>
    </Container>
  );
}

export default Body;
