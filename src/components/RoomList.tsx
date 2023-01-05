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

interface IRoomProps {
  //imageUrl: string;
  name: string;
  rating: number;
  city: string;
  country: string;
  price: number;
}

export default function RoomList({
  //imageUrl,
  name,
  rating,
  city,
  country,
  price,
}: IRoomProps) {
  const gray = useColorModeValue("gray.600", "gray.300");
  return (
    <VStack alignItems={"flex-start"}>
      <Box position={"relative"} overflow={"hidden"} mb={3} rounded={"3xl"}>
        <Image
          minH={"280"}
          src={
            "https://a0.muscache.com/im/pictures/prohost-api/Hosting-553863823287705078/original/f2369864-c9eb-4222-a73a-018e55254aed.jpeg?im_w=720"
          }
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
            {name}
          </Text>
          <HStack
            _hover={{ color: "red.100" }}
            spacing={1}
            alignItems={"center"}
          >
            <FaStar size={"12"} />
            <Text fontSize={"sm"}>{rating}</Text>
          </HStack>
        </Grid>
        <Text fontSize={"sm"} color={gray}>
          {city},{country}
        </Text>
      </Box>
      <Text fontSize={"sm"} color={gray}>
        <Text as={"b"}>${price}</Text> / night
      </Text>
    </VStack>
  );
}
