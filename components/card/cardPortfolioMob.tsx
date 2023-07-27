import { Flex, Link, Text } from "@chakra-ui/react";

type CardPortfolioType = {
  title: string;
  subtitle: String;
  text: string;
  srcImg: string;
  textColor?: string;
  idColor?: string;
  linkHref: string;
};

export default function CardPortfolioMob({
  title,
  subtitle,
  text,
  srcImg,
  idColor,
  textColor,
  linkHref,
}: CardPortfolioType) {
  return (
    <Link href={linkHref} isExternal className="no-link-underline">
      <Flex
        w={"240px"}
        h={"460px"}
        bgImg={srcImg}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        border={"6px solid green"}
        borderRadius={"20px"}
        justify={"flex-end"}
        ml={"65px"}
        cursor={"grab"}
      >
        {/* <Flex
        w={"350px"}
        h={"100%"}
        bg={"gray.1000"}
        opacity={"95%"}
        borderRightRadius={"13px"}
        direction={"column"}
        textAlign={"center"}
        justify={"center"}
        gap={"15px"}
        px={"20px"}
      >
        <Flex
          fontSize={"h1"}
          textStyle={"Bold"}
          justify={"center"}
          gap={"15px"}
        >
          <Text id={idColor} textColor={textColor}>
            {title}
          </Text>
          <Text>STORE</Text>
        </Flex>
        <Text fontSize={"text2"} textStyle={"Bold"}>
          {subtitle}
        </Text>
        <Text fontSize={"text3"} textStyle={"Regular"}>
          {text}
        </Text>
      </Flex> */}
      </Flex>
    </Link>
  );
}
