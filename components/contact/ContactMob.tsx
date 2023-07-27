import ApplicationContext from "@/contexts/provider/contextTranslate";
import { Flex, Img, Link, Text } from "@chakra-ui/react";
import { useContext } from "react";

export default function ContactMob() {
  const { isEn } = useContext(ApplicationContext);

  return (
    <Flex
      pt={"30px"}
      direction={"column"}
      w={"100%"}
      align={"center"}
      pb={"80px"}
    >
      <Flex h={"auto"} direction={"column"} pb={"30px"}>
        <Flex textStyle={"Bold"} fontSize={"h1"} gap={"15px"}>
          {isEn ? (
            <>
              <Text>CONTACT</Text>
              <Text textColor={"green.1000"}>ME</Text>
            </>
          ) : (
            <>
              <Text textColor={"green.1000"}>CONTATO</Text>
            </>
          )}
        </Flex>
      </Flex>
      <Flex
        w="100%"
        justify={"center"}
        fontSize={"h1"}
        textStyle={"Medium"}
        direction={"column"}
        align={"center"}
        gap={"25px"}
      >
        <Flex align={"center"} gap={"10px"}>
          <Flex gap={"15px"}>
            <Img w={"40px"} src={"/icons/contact/email-icon.svg"} />
          </Flex>
          <Link href={`mailto:alex_cubas1.0@hotmail.com`}>
            <Text fontSize={"text2"}>alex_cubas1.0@hotmail.com</Text>
          </Link>
        </Flex>
        <Flex gap={"10px"} align={"center"}>
          <Flex gap={"15px"}>
            <Img w={"35px"} src={"/icons/contact/phone-icon.svg"} />
          </Flex>
          <Link href={`tel:55+ (41) 99238-0193`}>
            <Text fontSize={"text2"}>55+ (41) 99238-0193</Text>
          </Link>
        </Flex>
        <Flex gap={"10px"} align={"center"}>
          <Flex gap={"30px"}>
            <Link href="https://github.com/alexcubas" isExternal>
              <Img
                w={"35px"}
                h={"35px"}
                src={"/icons/github-icon.svg"}
                alt="icon-github"
                cursor={"pointer"}
                _hover={{ width: "35px", height: "35px" }}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/alexsandro-cubas/"
              isExternal
            >
              <Img
                w={"35px"}
                h={"35px"}
                src={"/icons/linkedin-icon.svg"}
                alt="icon-linkedin"
                cursor={"pointer"}
                _hover={{ width: "38px", height: "38px" }}
              />
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
