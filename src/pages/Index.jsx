import { Container, Text, VStack, Heading, Box, List, ListItem, ListIcon } from "@chakra-ui/react";
import { FaRobot, FaBrain, FaCogs, FaEye, FaHandsHelping } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Unity3D Template for Meta Headset</Heading>
        <Text fontSize="lg">Integrating Emerald AI 2024, VRIF, Game Creator 2, and Meta SDK</Text>
        <Box mt={8} p={4} borderWidth={1} borderRadius="lg" width="100%">
          <Heading as="h2" size="lg" mb={4}>AI Concepts</Heading>
          <List spacing={3}>
            <ListItem>
              <ListIcon as={FaRobot} color="green.500" />
              AI Navigation and Pathfinding
            </ListItem>
            <ListItem>
              <ListIcon as={FaBrain} color="green.500" />
              Behavior Trees and Decision Making
            </ListItem>
            <ListItem>
              <ListIcon as={FaCogs} color="green.500" />
              State Machines for AI Control
            </ListItem>
            <ListItem>
              <ListIcon as={FaEye} color="green.500" />
              Perception Systems
            </ListItem>
            <ListItem>
              <ListIcon as={FaHandsHelping} color="green.500" />
              Cooperative AI Behaviors
            </ListItem>
          </List>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;