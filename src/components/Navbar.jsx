import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.500" p={4}>
      <Flex align="center">
        <Text fontSize="xl" color="white" fontWeight="bold">
          E-Commerce
        </Text>
        <Spacer />
        <Link as={RouterLink} to="/" color="white" mx={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/cart" color="white" mx={2}>
          Cart
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;