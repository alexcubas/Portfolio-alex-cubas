import { Flex, Text } from "@chakra-ui/react";
import CardStack from "./card/cardStack";

export default function Stacks() {
  return (
    <Flex
      mt={"30px"}
      direction={"column"}
      w={"100%"}
      align={"center"}
      mb={"50px"}
    >
      <Flex h={"auto"} direction={"column"} pb={"60px"}>
        <Flex textStyle={"Bold"} fontSize={"subTitle"} gap={"30px"}>
          <Text textColor={"green.1000"}>MY</Text>
          <Text>STACKS</Text>
        </Flex>
      </Flex>
      <Flex justify={"center"} gap={"15px"} px={"50px"} flexFlow={"row wrap"}>
        {/* <CardStack />
        <CardStack />
        <CardStack />
        <CardStack /> */}
      </Flex>
    </Flex>
  );
}
