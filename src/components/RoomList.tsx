import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function RoomList() {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"}>
      <Box position={"relative"} overflow={"hidden"} mb={3} rounded={"3xl"}>
        <Image
          minH={"280"}
          src="https://a0.muscache.com/im/pictures/7254d632-1cfd-49cf-bdf1-c6b194b0f07e.jpg?im_w=720"
        />
        <Button
          variant={"unstyled"}
          cursor={"pointer"}
          position={"absolute"}
          top={0}
          right={0}
          color={"white"}
        >
          <FaRegHeart size={20} />
        </Button>
      </Box>
      <Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
          <Text as={"b"} noOfLines={1} fontSize={"md"}>
            sadfas asdf sadf asdfasdfasdfsad
          </Text>
          <HStack
            _hover={{ color: "red.100" }}
            spacing={1}
            alignItems={"center"}
          >
            <FaStar size={"12"} />
            <Text fontSize={"sm"}>5.0</Text>
          </HStack>
        </Grid>
        <Text fontSize={"sm"} color={gray}>
          서울 대한민국
        </Text>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        <Text as={"b"}>$49</Text> / night
      </Text>
    </VStack>
  );
}
