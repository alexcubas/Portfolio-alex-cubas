import { Flex, Img, Text } from "@chakra-ui/react";

export default function Main() {
  return (
    <Flex h={"100vh"} justify={"flex-end"} position={"relative"}>
      <Flex
        w={"100%"}
        h={"750px"}
        position={"absolute"}
        bgImage={"/background-img.png"}
        bottom={0}
        zIndex={"-1"}
      />
      <Flex
        direction={"column"}
        h={"100%"}
        w={"850px"}
        align={"center"}
        justify={"center"}
        textAlign={"center"}
        textStyle={"Bold"}
        fontSize={"text1"}
      >
        <Text fontSize={"title"}>ALEXSANDRO CUBAS</Text>
        <Text id="gradient" fontSize={"subTitle"}>
          FULL STACK DEVELOPER
        </Text>
        <Text opacity={"60%"}>
          Passionate web development for high-performance solutions, combining
          creativity and technical expertise for exceptional results.
        </Text>
        <Flex gap={"7px"}>
          <Text textColor={"green.1000"}>Learn more</Text>
          <Img src="/icons/arrow-back-icon.svg" />
        </Flex>
      </Flex>
      <Flex
        w={"750px"}
        h={"815px"}
        alignSelf={"flex-end"}
        justify={"center"}
        mr={"120px"}
      >
        <Img src={"/profile-shadow.png"} />
      </Flex>
    </Flex>
  );
}
