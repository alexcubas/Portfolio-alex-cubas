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

export default function HeaderDesktop() {
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
      h={"12%"}
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
      <Flex align={"center"} gap={"60px"} ml={"35px"}>
        <Link href="https://github.com/alexcubas" isExternal>
          <Img
            src={"/icons/github-icon.svg"}
            alt="icon-github"
            width="62px"
            height="62px"
            _hover={{ width: "65px", height: "65px" }}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/alexsandro-cubas/" isExternal>
          <Img
            src={"/icons/linkedin-icon.svg"}
            alt="icon-linkedin"
            width="52px"
            height="52px"
            _hover={{ width: "55px", height: "55px" }}
          />
        </Link>
        <LinkScroll
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          offset={-200}
          onSetActive={() => handleSetActiveSection("home")}
        >
          <Text cursor={"pointer"}>Home</Text>
          <Flex
            h={"8px"}
            w={"100%"}
            bg={"green.1000"}
            borderRadius={"50px"}
            opacity={activeSection === "home" ? "100%" : "0%"}
          />
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          onSetActive={() => handleSetActiveSection("about")}
        >
          <Text cursor={"pointer"}>About</Text>
          <Flex
            h={"8px"}
            w={"100%"}
            bg={"green.1000"}
            borderRadius={"50px"}
            opacity={activeSection === "about" ? "100%" : "0%"}
          />
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="stack"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          onSetActive={() => handleSetActiveSection("stack")}
        >
          <Text cursor={"pointer"}>Stacks</Text>
          <Flex
            h={"8px"}
            w={"100%"}
            bg={"green.1000"}
            borderRadius={"50px"}
            opacity={activeSection === "stack" ? "100%" : "0%"}
          />
        </LinkScroll>
        <LinkScroll
          activeClass="active"
          to="port"
          spy={true}
          smooth={true}
          duration={500}
          offset={-80}
          onSetActive={() => handleSetActiveSection("port")}
        >
          <Text cursor={"pointer"}>Portfolio</Text>
          <Flex
            h={"8px"}
            w={"100%"}
            bg={"green.1000"}
            borderRadius={"50px"}
            opacity={activeSection === "port" ? "100%" : "0%"}
          />
        </LinkScroll>
      </Flex>
      <Flex align={"center"} mr={"25px"} gap={"25px"}>
        <Img
          src={"/icons/phone-icon.svg"}
          width="25px"
          height="25px"
          alt="phone-icon"
        />
        <Button
          bg={"green.1000"}
          borderRadius={"50px"}
          w={"260px"}
          h={"60px"}
          textStyle={"Bold"}
          fontSize={"text1"}
          textColor={"white"}
          _hover={{ bg: "green.2000" }}
          onClick={() => {
            phoneLogic();
          }}
        >
          Contact Me
        </Button>
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
