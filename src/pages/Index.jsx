import React, { useState } from "react";
import { Box, Button, Container, Flex, IconButton, Text, VStack } from "@chakra-ui/react";
import { FaHome, FaStore, FaRoad, FaCar } from "react-icons/fa";

const generateRandomMap = () => {
  const houses = Array.from({ length: 3 }, (_, i) => ({ id: `house-${i}`, type: "house", icon: FaHome, x: Math.random() * 80, y: i * 20 }));
  const destinations = [
    { id: "grocery", type: "destination", icon: FaStore, x: 80, y: 0 },
    { id: "bank", type: "destination", icon: FaStore, x: 80, y: 20 },
    { id: "restaurant", type: "destination", icon: FaStore, x: 80, y: 40 },
  ];
  const roads = [
    { from: "house-0", to: "grocery", vertical: false },
    { from: "house-1", to: "bank", vertical: true },
    { from: "house-2", to: "restaurant", vertical: false },
    { from: "grocery", to: "house-0", vertical: false },
    { from: "bank", to: "house-1", vertical: true },
    { from: "restaurant", to: "house-2", vertical: false },
  ];
  return { houses, destinations, roads };
};

const simulateTrip = (map) => {
  const departure = map.houses[Math.floor(Math.random() * map.houses.length)];
  const destination = map.destinations[Math.floor(Math.random() * map.destinations.length)];
  const tripRoad = map.roads.find((road) => road.from === departure.id && road.to === destination.id);
  return { departure, destination, tripRoad };
};

const Index = () => {
  const [map, setMap] = useState(generateRandomMap());
  const [trip, setTrip] = useState(null);

  const handleGenerateMap = () => {
    setMap(generateRandomMap());
    setTrip(null);
  };

  const handleSimulateTrip = () => {
    setTrip(simulateTrip(map));
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Button onClick={handleGenerateMap} colorScheme="teal">
          Generate Map
        </Button>
        <Button onClick={handleSimulateTrip} colorScheme="blue">
          Simulate Trip
        </Button>
        <Box width="150%" height="400px" border="1px solid black" position="relative">
          {map.roads.map((road, index) => {
            const from = map.houses.find((house) => house.id === road.from) || map.destinations.find((destination) => destination.id === road.from);
            const to = map.houses.find((house) => house.id === road.to) || map.destinations.find((destination) => destination.id === road.to);
            return <Box key={index} position="absolute" top={`${Math.min(from.y, to.y)}%`} left={`${Math.min(from.x, to.x)}%`} width={road.vertical ? "2px" : `${Math.abs(to.x - from.x)}%`} height={road.vertical ? `${Math.abs(to.y - from.y)}%` : "2px"} backgroundColor="gray" />;
          })}
          {map.houses.map((house) => (
            <IconButton key={house.id} aria-label={house.id} icon={<house.icon />} position="absolute" top={`${house.y}%`} left={`${house.x}%`} />
          ))}
          {map.destinations.map((destination) => (
            <IconButton key={destination.id} aria-label={destination.id} icon={<destination.icon />} position="absolute" top={`${destination.y}%`} left={`${destination.x}%`} />
          ))}
          {trip && (
            <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="red">
              <FaCar />
              <Text>{`Trip from ${trip.departure.id} to ${trip.destination.id}`}</Text>
            </Box>
          )}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
