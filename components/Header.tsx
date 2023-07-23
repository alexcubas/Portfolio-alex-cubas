import { Flex, Text, Img, Button } from "@chakra-ui/react";

export default function HeaderDesktop() {
  return (
    <Flex
      w={"100%"}
      h={"110px"}
      align={"center"}
      justify={"space-between"}
      textStyle={"Bold"}
      fontSize={"text1"}
      position={"fixed"}
      bg={"linear-gradient(180deg, #343434 0%, rgba(52, 52, 52, 0.83) 100%)"}
      zIndex={10}
    >
      <Flex align={"center"} gap={"60px"} ml={"35px"}>
        <Img
          src={"/icons/github-icon.svg"}
          alt="icon-github"
          width="62px"
          height="62px"
        />
        <Img
          src={"/icons/linkedin-icon.svg"}
          alt="icon-linkedin"
          width="52px"
          height="52px"
          mx={["60px", "20px", "20px", "20px", "20px"]}
        />
        <Flex direction={"column"}>
          <Text>Home</Text>
          <Flex h={"8px"} w={"100%"} bg={"green.1000"} borderRadius={"50px"} />
        </Flex>
        <Text>About</Text>
        <Text>Stacks</Text>
        <Text>Portfolio</Text>
      </Flex>
      <Flex align={"center"} mr={"25px"} gap={"25px"}>
        <Img
          src={"/icons/phone-icon.svg"}
          width="25px"
          height="25px"
          alt="phone-icon"
        />
        <Button
          bg={"green.1000"}
          borderRadius={"50px"}
          w={"260px"}
          h={"60px"}
          textStyle={"Bold"}
          fontSize={"text1"}
          textColor={"white"}
        >
          Contact Me
        </Button>
        <Img
          src={"/icons/brazil-icon.svg"}
          width="44pxpx"
          height="33px"
          alt="phone-icon"
        />
        <Img
          src={"/icons/usa-icon.svg"}
          width="44px"
          height="33px"
          alt="phone-icon"
        />
      </Flex>
    </Flex>
  );
}
