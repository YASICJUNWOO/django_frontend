import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Skeleton,
  SkeletonText,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import RoomList from "../components/RoomList";

export default function Home() {
  return (
    <Grid
      mt={10}
      px={{ base: 10, lg: 40 }}
      columnGap={4}
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "1fr 1fr",
        lg: "repeat(3,1fr)",
        xl: "repeat(4,1fr)",
        "2xl": "repeat(5,1fr)",
      }}
    >
      <Box>
        <Skeleton rounded={"2xl"} height={280} mb={7}></Skeleton>
        <SkeletonText w={"50%"} noOfLines={3} mb={7}></SkeletonText>
      </Box>
      <RoomList />
    </Grid>
  );
}
