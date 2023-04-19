import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Product from "./product";
import useFetch from "../../hooks/useFetch";

function Body() {
  const [products, setProducts] = useState([]);
  const productUrl = "https://fakestoreapi.com/products";
  const { data, setUrl } = useFetch(productUrl);

  useEffect(() => {
    setProducts(data);
  }, [data]);
  return (
    <Container disableGutters maxWidth="lg">
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} lg={4} xl={3}>
            <Product key={product.key} product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Body;
