import React from "react";
// import { Box, Text, Image, Flex} from "@chakra-ui/react";
import {Flex,Box,chakra, Link, Image,CardFooter,Button,Card} from '@chakra-ui/react'

function BookCard({ book, onClick }) {
  const handleClick = () => {
    onClick(book);
  };

  return (
    <Flex
        mt={0}
        // bg="#edf3f8"
        _dark={{
          bg: "#3e3e3e",
        }}
        p={25}
        w="full"
        height="full"
        alignItems="center"
        justifyContent="center"
      >
    {/* <Box
      maxW="sm"
      borderWidth="2px"
      boxShadow="dark-lg"
      borderRadius="lg"
      overflow="hidden"
      onClick={handleClick}
      cursor="pointer"
    >
      <Image src={book.image} alt={book.title} h={200}/>
      <Box p={4}>
        <Text fontSize="xl" fontWeight="bold">
          {book.title}
        </Text>
        <Text fontSize="md" color="gray.600">
          {book.subtitle}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Authors: {book.authors}
        </Text>
      </Box>
    </Box> */}
    <Card maxW="lg">
        <Box
          mx="auto"
          rounded="lg"
          shadow="md"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
          maxW="2xl"
        >
          <Image
            roundedTop="lg"
            w="full"
            h={64}
            fit="cover"
            src={book.image}
            alt="Article"
          />

          <Box p={6}>
            <Box>

            </Box>

            <Box mt={4}>
              <Box alignItems="center">
                <Flex alignItems="center">
                  <Link
                    // mx={2}
                    fontWeight="bold"
                    color="gray.700"
                    _dark={{
                      color: "gray.200",
                    }}
                  >
                    Title: {book.title}
                  </Link>
                </Flex>
                <Flex alignItems="center">
                <chakra.span
                  my={2}
                //   mx={2}
                  fontSize="sm"
                  color="gray.600"
                  _dark={{
                    color: "gray.300",
                  }}
                >
                  Authors: {book.authors}
                </chakra.span>
                </Flex>
              </Box>
            </Box>
            <CardFooter
          justify="space-between"
          flexWrap="wrap"
          sx={{
            "& > button": {
              minW: "136px",
            },
          }}
        >
        </CardFooter>
          </Box>
        </Box>
        </Card>
    </Flex>
  );
}

export default BookCard;
