import { Flex, Text } from "@chakra-ui/react";

export default function CardPortfolio() {
  return (
    <Flex
      w={"1174px"}
      h={"357px"}
      bgImg={"/linglong-port.png"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center"}
      border={"6px solid green"}
      borderRadius={"20px"}
      justify={"flex-end"}
    >
      <Flex
        w={"350px"}
        h={"100%"}
        bg={"gray.1000"}
        opacity={"85%"}
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
          <Text id="gradient">LINGLONG</Text>
          <Text>STORE</Text>
        </Flex>
        <Text fontSize={"text2"} textStyle={"Bold"}>
          Linglong Website - Front-end & Project Management
        </Text>
        <Text fontSize={"text3"} textStyle={"Regular"}>
          As both front-end developer and project manager, I led the development
          of the LingLong website using Next.js. Our goal: an exceptional,
          responsive user experience. Despite the 3-month deadline, we delivered
          a fully functional website. Additionally, I oversaw a dynamic
          dashboard for price updates and promotions. Worked with a skilled team
          of three front-end developers to achieve project success.
        </Text>
      </Flex>
    </Flex>
  );
}
