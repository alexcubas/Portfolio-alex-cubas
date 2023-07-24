import { Flex, Img, Text } from "@chakra-ui/react";
import scrollTo from "../../utils/scroller";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

export default function MainMob() {
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
    <Flex justify={"flex-end"} position={"relative"} direction={"column"}>
      <Flex
        w={"100%"}
        position={"absolute"}
        bgImage={"/background-img.png"}
        bottom={0}
        zIndex={"10"}
        id={"home"}
      />
      <Flex
        direction={"column"}
        h={"100%"}
        w={"100%"}
        align={"center"}
        justify={"center"}
        textAlign={"center"}
        textStyle={"Regular"}
        fontSize={"text2"}
        as={motion.div}
        initial={{ y: 150, opacity: 0 }}
        animate={controls}
        mt={"60px"}
      >
        <Text textStyle={"Bold"} fontSize={"h1"}>
          ALEXSANDRO CUBAS
        </Text>
        <Text textStyle={"Bold"} id="gradient" fontSize={"text1"}>
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
        justify={"center"}
        as={motion.div}
        initial={{ y: 150, opacity: 0 }}
        animate={controls}
      >
        <Img src={"/profile-shadow.png"} />
      </Flex>
    </Flex>
  );
}
