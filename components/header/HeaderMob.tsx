import phoneLogic from "@/utils/phoneLogic";
import {
  Flex,
  Text,
  Img,
  Button,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

export default function HeaderMob() {
  const [activeSection, setActiveSection] = useState("home");

  const handleSetActiveSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      transition: {
        duration: 1.5,
        delay: 0.2,
        ease: [0, 0.3, 0.6, 1.0],
      },
    });
  });

  return (
    <Flex
      w={"100%"}
      h={"50px"}
      align={"center"}
      justify={"space-between"}
      textStyle={"Bold"}
      fontSize={"text1"}
      position={"fixed"}
      bg={"linear-gradient(180deg, #343434 0%, rgba(52, 52, 52, 0.83) 100%)"}
      zIndex={10}
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      <Flex align={"center"} ml={"25px"}>
        <Img
          src={"/icons/hamburguer-icon.svg"}
          width="44pxpx"
          height="33px"
          alt="brazil-icon"
        />
      </Flex>
      <Flex align={"center"} mr={"25px"} gap={"25px"}>
        <Img
          src={"/icons/brazil-icon.svg"}
          width="44pxpx"
          height="33px"
          alt="brazil-icon"
          opacity={"50%"}
        />
        <Img
          src={"/icons/usa-icon.svg"}
          width="44px"
          height="33px"
          alt="usa-icon"
        />
      </Flex>
    </Flex>
  );
}
