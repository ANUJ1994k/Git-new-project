// // App.js
// import React from 'react';
// import {
//   ChakraProvider,
//   Box,
//   Heading,
//   Image,
//   Text,
//   Card,
//   CardBody,
//   Stack,
// } from '@chakra-ui/react';

// function App() {
//   return (
//     <ChakraProvider>
//       <Box p={6} maxWidth="600px" mx="auto" mt={10}>
//         {/* Card: Beautiful card with rounded corners, shadow, and 3D effect */}
//         <Card
//           borderRadius="lg"
//           overflow="hidden"
//           boxShadow="lg" // Shadow for 3D effect
//           transition="transform 0.3s ease" // Smooth animation
//           _hover={{ transform: 'scale(1.05)' }} // Hover effect
//           maxWidth="100%" // Ensures card fits smaller screens
//         >
//           <CardBody p={6}>
//             {/* Title of the card */}
//             <Heading size="lg" textAlign="center" mb={4} color="teal.500">
//               Chakra UI Card
//             </Heading>

//             {/* Image in the center of the card */}
//             <Box display="flex" justifyContent="center" mb={4}>
//               <Image
//                 src="https://images.pexels.com/photos/20542478/pexels-photo-20542478/free-photo-of-elderly-woman-in-traditional-clothing-walking-with-backpack.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
//                 alt="Sample Image"
//                 borderRadius="full" // Rounded image
//                 boxSize="150px"
//               />
//             </Box>

//             {/* Description text below the image */}
//             <Text textAlign="center" fontSize="md" color="gray.600">
//               Actress , Musician Songwriter and Artist PM for work inquires<br></br> Or <br></br><mark color="blue.600">#tag</mark><br></br>Me in your post  <br></br>
//               <p>#ART  #PHOTOGRAPHY     #MUSIC</p>
//             </Text>
//           </CardBody>
//         </Card>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default App;


// App.js
import React from 'react';
import {
  ChakraProvider,
  Box,
  Heading,
  Image,
  Text,
  Card,
  CardBody,
  Stack,
  Button,
  HStack,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Box p={6} maxWidth="600px" mx="auto" mt={10}>
        {/* Card: Beautiful card with rounded corners, shadow, and 3D effect */}
        <Card
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg" // Shadow for 3D effect
          transition="transform 0.3s ease" // Smooth animation
          _hover={{ transform: 'scale(1.05)' }} // Hover effect
          maxWidth="100%" // Ensures card fits smaller screens
        >
          <CardBody p={6}>
            {/* Title of the card */}
            <Heading size="lg" textAlign="center" mb={4} color="teal.500">
              Chakra UI Card
            </Heading>

           
         <Box display="flex" justifyContent="center" mb={4}>
//               <Image
                src="https://images.pexels.com/photos/20542478/pexels-photo-20542478/free-photo-of-elderly-woman-in-traditional-clothing-walking-with-backpack.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="Sample Image"
                borderRadius="full" // Rounded image
                boxSize="150px"
              />
            </Box> 

            {/* Description text below the image */}
            <Text textAlign="center" fontSize="md" color="gray.600">
//               Actress , Musician Songwriter and Artist PM for work inquires<br></br> Or <br></br><mark color="blue.600">#tag</mark><br></br>Me in your post  <br></br>
//              <p>#ART                #PHOTOGRAPHY    #MUSIC</p>
//             </Text>

            {/* Buttons for "Message" and "Follow" */}
            <HStack spacing={4} justify="center">
              <Button colorScheme="teal" background={'whitesmoke'} variant="solid" size="md" textColor={'black'}>
                Message
              </Button>
              <Button colorScheme="blue" variant="outline" size="md" background={'#4298e1'} textColor={'white'} >
                Follow
              </Button>
            </HStack>
          </CardBody>
        </Card>
      </Box>
    </ChakraProvider>
  );
}

export default App;
