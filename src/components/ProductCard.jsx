import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product-details/${product.id}`, { state: { product } });
  };

  return (
    <Card onClick={handleClick} style={{ cursor: "pointer" }}>
      <CardMedia
        component="img"
        height="140"
        image={product.image}
        alt={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Price: ${product.price}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;