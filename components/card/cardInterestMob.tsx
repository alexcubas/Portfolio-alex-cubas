import { Flex, Img, Text } from "@chakra-ui/react";

type CardInterestType = {
  imagemSrc: string;
  text: string;
  width: string;
  height: string;
};

export default function CardInterestMob({
  imagemSrc,
  text,
  height,
  width,
}: CardInterestType) {
  return (
    <Flex
      w={"170px"}
      h={"110px"}
      border={"1px solid white"}
      borderRadius={"50px"}
      direction={"column"}
      align={"center"}
      justify={"center"}
      position={"relative"}
      _hover={{ boxShadow: " 0px 0px 55px -30px rgba(255,255,255,1);" }}
    >
      <Img
        mb={"40px"}
        h={height}
        w={width}
        src={`/icons/interests/${imagemSrc}`}
      />
      <Text
        bottom={"10px"}
        position={"absolute"}
        textStyle={"Bold"}
        fontSize={"text1"}
      >
        {text}
      </Text>
    </Flex>
  );
}
