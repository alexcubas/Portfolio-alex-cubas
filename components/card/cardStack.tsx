import { Flex, Img, Text } from "@chakra-ui/react";

type CardStackType = {
  srcImg: string;
  title: string;
  text: string;
  width: string;
  height: string;
};

export default function CardStack({
  srcImg,
  text,
  title,
  height,
  width,
}: CardStackType) {
  return (
    <Flex
      w={"380px"}
      h={"570px"}
      border={"1px solid white"}
      borderRadius={"50px"}
      direction={"column"}
      align={"center"}
      justify={"center"}
      gap={"15px"}
    >
      <Img w={width} h={height} src={`/icons/stacks/${srcImg}`} />
      <Text fontSize={"subTitle"} textStyle={"Bold"}>
        {title}
      </Text>
      <Text
        fontSize={"text2"}
        textStyle={"Regular"}
        px={"20px"}
        textAlign={"center"}
      >
        {text}
      </Text>
    </Flex>
  );
}
