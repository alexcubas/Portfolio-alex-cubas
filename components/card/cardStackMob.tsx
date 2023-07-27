import { Flex, Img, Text } from "@chakra-ui/react";

type CardStackType = {
  srcImg: string;
  title: string;
  text: string | undefined;
  width: string;
  height: string;
};

export default function CardStackMob({
  srcImg,
  text,
  title,
  height,
  width,
}: CardStackType) {
  return (
    <Flex
      w={"333px"}
      h={"420px"}
      border={"1px solid white"}
      borderRadius={"50px"}
      direction={"column"}
      align={"center"}
      justify={"center"}
      gap={"5px"}
      _hover={{ boxShadow: " 0px 0px 55px -30px rgba(255,255,255,1);" }}
    >
      <Img w={width} h={height} src={`/icons/stacks/${srcImg}`} />
      <Text fontSize={"h1"} textStyle={"Bold"}>
        {title}
      </Text>
      <Text
        fontSize={"text3"}
        textStyle={"Regular"}
        px={"20px"}
        textAlign={"center"}
      >
        {text}
      </Text>
    </Flex>
  );
}
