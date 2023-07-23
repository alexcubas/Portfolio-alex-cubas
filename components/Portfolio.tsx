import { Flex, Text } from "@chakra-ui/react";
import CardPortfolio from "./card/cardPortfolio";

export default function Portfolio() {
  return (
    <Flex
      pt={"50px"}
      direction={"column"}
      w={"100%"}
      bg={"gray.1000"}
      align={"center"}
      pb={"100px"}
    >
      <Flex h={"auto"} direction={"column"} pb={"60px"}>
        <Flex textStyle={"Bold"} fontSize={"subTitle"} gap={"30px"}>
          <Text textColor={"green.1000"}>MY</Text>
          <Text>PORTFOLIO</Text>
        </Flex>
      </Flex>
      <Flex>
        <CardPortfolio />
      </Flex>
    </Flex>
  );
}
