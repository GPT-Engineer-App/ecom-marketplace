import { Box, SimpleGrid, Image, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  { id: 1, name: "Product 1", image: "https://via.placeholder.com/150", price: "$10" },
  { id: 2, name: "Product 2", image: "https://via.placeholder.com/150", price: "$20" },
  { id: 3, name: "Product 3", image: "https://via.placeholder.com/150", price: "$30" },
];

const Index = () => {
  return (
    <Box p={4}>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {products.map((product) => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <Text fontWeight="bold" fontSize="xl">
                {product.name}
              </Text>
              <Text mt={2}>{product.price}</Text>
              <Button as={RouterLink} to={`/product/${product.id}`} mt={4} colorScheme="blue">
                View Details
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Index;