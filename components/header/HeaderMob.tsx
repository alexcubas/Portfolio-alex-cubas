import ApplicationContext from "@/contexts/provider/contextTranslate";
import filterTranslate from "@/utils/filterTranslate";
import phoneLogic from "@/utils/phoneLogic";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Flex,
  Text,
  Img,
  Button,
  Link,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

export default function HeaderMob() {
  const { setIsEn, isEn } = useContext(ApplicationContext);

  const [activeSection, setActiveSection] = useState("about");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSetActiveSection = (sectionId: string) => {
    console.log("entrou aq", sectionId);

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
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader bg={"linear-gradient(90deg, #12a652 0%, #448ff2 100%)"}>
            <Flex align={"center"} justify={"center"} onClick={onClose}>
              <Text textAlign={"center"} fontSize={"h1"}>
                VOLTAR
              </Text>
              <ChevronRightIcon boxSize={"35px"} />
            </Flex>
          </DrawerHeader>
          <DrawerBody bg={"gray.2000"}>
            <Flex direction={"column"} h={"100%"} justify={"space-between"}>
              <Flex
                mt={"20px"}
                direction={"column"}
                fontSize={"h1"}
                textStyle={"Medium"}
                gap={"10px"}
              >
                <LinkScroll
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-200}
                  onSetActive={() => handleSetActiveSection("home")}
                >
                  <Flex align={"center"} gap={"10px"}>
                    {/* <Flex
                      bg={"green.1000"}
                      w="15px"
                      h="15px"
                      borderRadius={"50px"}
                      display={activeSection === "home" ? "flex" : "none"}
                    /> */}
                    <Text onClick={() => onClose()}>
                      {filterTranslate("headerH")}
                    </Text>
                  </Flex>
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
                  <Flex align={"center"} gap={"10px"}>
                    {/* <Flex
                      bg={"green.1000"}
                      w="15px"
                      h="15px"
                      borderRadius={"50px"}
                      display={activeSection === "about" ? "flex" : "none"}
                    /> */}
                    <Text onClick={() => onClose()}>
                      {filterTranslate("headerA")}
                    </Text>
                  </Flex>
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
                  <Flex align={"center"} gap={"10px"}>
                    {/* <Flex
                      bg={"green.1000"}
                      w="15px"
                      h="15px"
                      borderRadius={"50px"}
                      display={activeSection === "stack" ? "flex" : "none"}
                    /> */}
                    <Text onClick={() => onClose()}>
                      {filterTranslate("headerS")}
                    </Text>
                  </Flex>
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
                  <Flex align={"center"} gap={"10px"}>
                    {/* <Flex
                      bg={"green.1000"}
                      w="15px"
                      h="15px"
                      borderRadius={"50px"}
                      display={activeSection === "port" ? "flex" : "none"}
                    /> */}
                    <Text onClick={() => onClose()}>
                      {filterTranslate("headerP")}
                    </Text>
                  </Flex>
                </LinkScroll>
              </Flex>
              <Flex
                direction={"column"}
                align={"center"}
                gap={"20px"}
                mb={"30px"}
              >
                <Flex align={"center"} gap={"15px"}>
                  <Link href="https://github.com/alexcubas" isExternal>
                    <Img
                      src={"/icons/github-icon.svg"}
                      alt="icon-github"
                      width="62px"
                      height="62px"
                      _hover={{ width: "65px", height: "65px" }}
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/alexsandro-cubas/"
                    isExternal
                  >
                    <Img
                      src={"/icons/linkedin-icon.svg"}
                      alt="icon-linkedin"
                      width="52px"
                      height="52px"
                      _hover={{ width: "55px", height: "55px" }}
                    />
                  </Link>
                </Flex>
                <Flex align={"center"} gap={"15px"}>
                  <Img
                    src={"/icons/phone-icon.svg"}
                    width="25px"
                    height="25px"
                    alt="phone-icon"
                  />
                  <Button
                    bg={"green.1000"}
                    borderRadius={"50px"}
                    w={"250px"}
                    h={"50px"}
                    textStyle={"Bold"}
                    fontSize={"text1"}
                    textColor={"white"}
                    _hover={{ bg: "green.2000" }}
                    onClick={() => {
                      phoneLogic();
                    }}
                  >
                    {filterTranslate("headerC")}
                  </Button>
                </Flex>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Flex align={"center"} ml={"25px"}>
        <Img
          src={"/icons/hamburguer-icon.svg"}
          width="44px"
          height="33px"
          alt="brazil-icon"
          onClick={onOpen}
        />
      </Flex>
      <Flex align={"center"} mr={"25px"} gap={"25px"}>
        <Img
          src={"/icons/brazil-icon.svg"}
          width="44px"
          height="33px"
          alt="brazil-icon"
          opacity={isEn ? "50%" : "100%"}
          onClick={() => setIsEn(false)}
        />
        <Img
          src={"/icons/usa-icon.svg"}
          width="44px"
          height="33px"
          alt="usa-icon"
          opacity={!isEn ? "50%" : "100%"}
          onClick={() => setIsEn(true)}
        />
      </Flex>
    </Flex>
  );
}
