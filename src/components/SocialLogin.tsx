import { Box, HStack, Divider, Text, VStack, Button } from "@chakra-ui/react";
import { FaGithub, FaComment } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <Box mb={"4"}>
      <HStack my={8}>
        <Divider />
        <Text
          textTransform={"uppercase"}
          color="gray.500"
          fontSize={"xs"}
          as={"b"}
        >
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button w={"100%"} leftIcon={<FaGithub />} colorScheme={"facebook"}>
          Continue with github
        </Button>
        <Button w={"100%"} leftIcon={<FaComment />} colorScheme={"yellow"}>
          Continue with github
        </Button>
      </VStack>
    </Box>
  );
}
