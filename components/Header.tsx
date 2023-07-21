import { Flex, Text, Img } from "@chakra-ui/react";

export default function HeaderDesktop() {
  return (
    <Flex w={"100%"} h={"120px"}>
      <Img
        src={"/icons/github-icon.svg"}
        width="52px"
        height="52px"
        alt="Email Pós-Vendas"
      />
      <Img
        src={"/icons/linkedin-icon.svg"}
        width="52px"
        height="52px"
        alt="Email Pós-Vendas"
      />
      <Text id="gradient" textStyle={"Bold"}>
        Aq vai o HEADER
      </Text>
    </Flex>
  );
}
