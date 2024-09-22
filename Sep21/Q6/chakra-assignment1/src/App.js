// App.js
import React, { useState } from 'react';
import {
  ChakraProvider,
  Heading,
  Button,
  Input,
  Card,
  CardBody,
  Box,
  Text,
  Image,
} from '@chakra-ui/react';

function App() {
  const [inputValue, setInputValue] = useState(''); 

  const handleInputChange = (e) => {
    setInputValue(e.target.value); 
  };

  return (
    <ChakraProvider>
      <Box p={6} maxWidth="600px" mx="auto" mt={10}>
      
        <Heading mb={8} textAlign="center" color="teal.500">
          My Chakra UI Application
        </Heading>

       
        <Input
          placeholder="Enter something..."
          size="md"
          mb={6}
          borderColor="gray.300"
          value={inputValue} 
          onChange={handleInputChange} // Handle input changes
        />

        {/* Button: User interaction button */}
        <Button colorScheme="teal" size="lg" mb={8}>
          Submit
        </Button>

       
        <Card
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          shadow="md"
        >
          {/* Image: Display an image inside the card */}
          <Image
            src="https://images.pexels.com/photos/27034673/pexels-photo-27034673/free-photo-of-a-fox-sitting-behind-the-grass-on-a-meadow.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Sample Image"
            objectFit="cover"
            width={`${600}px`}
            height={`${250}px`}
          />

          <CardBody>
            {/* Title for the card */}
            <Heading size="md" mb={4}>
             Card-Item
            </Heading>

            {/* Display the input field's value in the card */}
            <Text>
              {inputValue
                ? `${inputValue}`
                : 'Please enter something in the input field above.'}
            </Text>
          </CardBody>
        </Card>
      </Box>
    </ChakraProvider>
  );
}

export default App;
