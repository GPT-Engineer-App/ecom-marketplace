import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1", image: "https://via.placeholder.com/150", price: "$10", description: "Description of Product 1" },
  { id: 2, name: "Product 2", image: "https://via.placeholder.com/150", price: "$20", description: "Description of Product 2" },
  { id: 3, name: "Product 3", image: "https://via.placeholder.com/150", price: "$30", description: "Description of Product 3" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <Box p={4}>
      <Image src={product.image} alt={product.name} />
      <Box p={6}>
        <Text fontWeight="bold" fontSize="2xl">
          {product.name}
        </Text>
        <Text mt={2}>{product.price}</Text>
        <Text mt={4}>{product.description}</Text>
        <Button mt={4} colorScheme="blue">
          Add to Cart
        </Button>
      </Box>
    </Box>
  );
};

export default ProductDetail;