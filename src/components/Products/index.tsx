import CardProcuts from "../CardProducts";
import { Container } from "./styles";
import React from "react";

const ProductsList = [
  { textPlan: "30min", Price: 39.99 },
  { textPlan: "60min", Price: 69.99 },
  { textPlan: "120min", Price: 99.99 },
];

const Products = () => {
  return (
    <Container>
      {React.Children.toArray(
        ProductsList.map((product) => (
          <CardProcuts
            textPlan={product.textPlan}
            price={Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
              product.Price
            )}
          />
        ))
      )}
    </Container>
  );
};

export default Products;
