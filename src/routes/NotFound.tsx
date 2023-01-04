import { Button, Heading, Text, VStack } from "@chakra-ui/react";

export default function NotFound() {
  return (
    <VStack bg={"gray.300"} justifyContent={"center"} minH={"100vh"}>
      <Heading>Page not found.</Heading>
      <Text> It seems that you're lost</Text>
      <Button variant={"link"} colorScheme={"red"}>
        Go home
      </Button>
    </VStack>
  );
}
