import { Box, Text } from "@chakra-ui/react";

const Cart = () => {
  return (
    <Box p={4}>
      <Text fontSize="2xl">Shopping Cart</Text>
      <Text mt={4}>Your cart is currently empty.</Text>
    </Box>
  );
};

export default Cart;