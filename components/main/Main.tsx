import { Flex, Img, Text } from "@chakra-ui/react";
import scrollTo from "../../utils/scroller";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function Main() {
  const controls = useAnimation();
  useEffect(() => {
    controls.start({
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.0,
        delay: 0.3,
        ease: [0, 0.3, 0.6, 1.0],
      },
    });
  });
  return (
    <Flex h={"100vh"} justify={"flex-end"} position={"relative"}>
      <Flex
        w={"100%"}
        h={"750px"}
        position={"absolute"}
        bgImage={"/background-img.png"}
        bottom={0}
        zIndex={"-1"}
        id={"home"}
      />
      <Flex
        direction={"column"}
        h={"100%"}
        w={"850px"}
        align={"center"}
        justify={"center"}
        textAlign={"center"}
        textStyle={"Bold"}
        fontSize={{ lg: "text2", xl: "text1" }}
        as={motion.div}
        initial={{ y: 150, opacity: 0 }}
        animate={controls}
      >
        <Text fontSize={{ lg: "subTitle", xl: "title" }}>ALEXSANDRO CUBAS</Text>
        <Text id="gradient" fontSize={{ lg: "h1", xl: "subTitle" }}>
          FULL STACK DEVELOPER
        </Text>
        <Text opacity={"60%"} px={"30px"}>
          Passionate web development for high-performance solutions, combining
          creativity and technical expertise for exceptional results.
        </Text>
        <Flex
          gap={"7px"}
          onClick={() => {
            scrollTo("about");
          }}
          cursor={"pointer"}
        >
          <Text textColor={"green.1000"} _hover={{ textColor: "green.2000" }}>
            Learn more
          </Text>
          <Img src="/icons/arrow-back-icon.svg" />
        </Flex>
      </Flex>
      <Flex
        w={{ lg: "550px", xl: "auto" }}
        alignSelf={"flex-end"}
        justify={"center"}
        mr={"120px"}
        as={motion.div}
        initial={{ y: 150, opacity: 0 }}
        animate={controls}
      >
        <Img src={"/profile-shadow.png"} />
      </Flex>
    </Flex>
  );
}
