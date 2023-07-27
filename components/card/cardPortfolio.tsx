import ApplicationContext from "@/contexts/provider/contextTranslate";
import { Flex, Link, Text } from "@chakra-ui/react";
import { useContext } from "react";

type CardPortfolioType = {
  title: string;
  subtitle: String;
  text: string | undefined;
  srcImg: string;
  textColor?: string;
  idColor?: string;
  linkHref: string;
};

export default function CardPortfolio({
  title,
  subtitle,
  text,
  srcImg,
  idColor,
  textColor,
  linkHref,
}: CardPortfolioType) {
  const { isEn } = useContext(ApplicationContext);
  return (
    <Link href={linkHref} isExternal className="no-link-underline">
      <Flex
        w={"1174px"}
        h={"357px"}
        bgImg={srcImg}
        backgroundRepeat={"no-repeat"}
        backgroundPosition={"center"}
        border={"6px solid green"}
        borderRadius={"20px"}
        justify={"flex-end"}
        ml={"65px"}
        cursor={"grab"}
      >
        <Flex
          w={"350px"}
          h={"100%"}
          bg={"gray.1000"}
          opacity={"95%"}
          borderRightRadius={"13px"}
          direction={"column"}
          textAlign={"center"}
          justify={"center"}
          gap={"5px"}
          px={"20px"}
        >
          <Flex
            fontSize={"h1"}
            textStyle={"Bold"}
            justify={"center"}
            gap={"15px"}
          >
            {isEn ? (
              <>
                <Text id={idColor} textColor={textColor}>
                  {title}
                </Text>
                <Text>STORE</Text>
              </>
            ) : (
              <>
                <Text>LOJA</Text>
                <Text id={idColor} textColor={textColor}>
                  {title}
                </Text>
              </>
            )}
          </Flex>
          <Text fontSize={"text2"} textStyle={"Bold"}>
            {subtitle}
          </Text>
          <Text fontSize={"text3"} textStyle={"Regular"}>
            {text}
          </Text>
        </Flex>
      </Flex>
    </Link>
  );
}
