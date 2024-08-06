import React from "react";
import { useLocation } from "react-router-dom";
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const ProductDetails = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <Container>
      <Card>
        <CardMedia
          component="img"
          height="300"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {product.description}
          </Typography>
          <Typography variant="h6">Price: ${product.price}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ProductDetails;