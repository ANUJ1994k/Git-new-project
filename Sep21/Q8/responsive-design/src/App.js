import React from 'react';
import { ChakraProvider, Box, Grid, Avatar, Text, Heading, Flex } from '@chakra-ui/react';

function Testimonials() {
  const testimonials = [
    {
      title: 'Efficient Collaborating',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
      name: 'Jane Cooper',
      position: 'CEO at ABC Corporation',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0p_kdU2tLXoRnjk6fVTZsNSJTxeTIHMgMCw&s',
    },
    {
      title: 'Intuitive Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
      name: 'Jane Cooper',
      position: 'CEO at ABC Corporation',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0p_kdU2tLXoRnjk6fVTZsNSJTxeTIHMgMCw&s',
    },
    {
      title: 'Mindblowing Service',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
      name: 'Jane Cooper',
      position: 'CEO at ABC Corporation',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0p_kdU2tLXoRnjk6fVTZsNSJTxeTIHMgMCw&s',
    },
  ];

  return (
    <ChakraProvider>
      <Box bg="gray.50" py={10} px={5}>
        <Heading as="h2" size="xl" textAlign="center" mb={5}>
          Our Clients Speak
        </Heading>
        <Text textAlign="center" color="gray.600" mb={10}>
          We have been working with clients around the world
        </Text>

        {/* Testimonials Grid */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}
          gap={8}
          alignItems="center"
        >
          {testimonials.map((testimonial, index) => (
            <Box
              key={index}
              bg="white"
              p={6}
              borderRadius="md"
              boxShadow="lg"
              position="relative"
              textAlign="center"
            >
              <Heading as="h3" size="md" mb={4}>
                {testimonial.title}
              </Heading>
              <Text mb={6} color="gray.600">
                {testimonial.description}
              </Text>

              {/* Arrow below the card */}
              <Box
                position="absolute"
                bottom="-20px"
                left="50%"
                transform="translateX(-50%)"
                w="20px"
                h="20px"
                bg="white"
                boxShadow="lg"
                borderBottomLeftRadius="10px"
                borderBottomRightRadius="10px"
                clipPath="polygon(50% 0%, 0% 100%, 100% 100%)"
              />

              <Flex direction="column" alignItems="center" mt={10}>
                <Avatar src={testimonial.avatar} size="lg" mb={3} />
                <Text fontWeight="bold">{testimonial.name}</Text>
                <Text fontSize="sm" color="gray.500">
                  {testimonial.position}
                </Text>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default Testimonials;
