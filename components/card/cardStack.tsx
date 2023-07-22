import { Flex, Img, Text } from "@chakra-ui/react";

type CardStackType = {
  srcImg: string;
  title: string;
  text: string;
};

export default function CardStack({ srcImg, text, title }: CardStackType) {
  return (
    <Flex
      w={"380px"}
      h={"570px"}
      border={"1px solid white"}
      borderRadius={"50px"}
    >
      <Img src={`/icons/stacks/${srcImg}`} />
      <Text>{title}</Text>
      <Text>{text}</Text>
    </Flex>
  );
}
