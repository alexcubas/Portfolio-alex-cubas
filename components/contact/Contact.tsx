import { Flex, Img, Link, Text } from "@chakra-ui/react";

export default function Contact() {
  return (
    <Flex
      pt={"50px"}
      direction={"column"}
      w={"100%"}
      bg={"gray.1000"}
      align={"center"}
      pb={"100px"}
    >
      <Flex h={"auto"} direction={"column"} pb={"60px"}>
        <Flex textStyle={"Bold"} fontSize={"subTitle"} gap={"30px"}>
          <Text>CONTACT</Text>
          <Text textColor={"green.1000"}>ME</Text>
        </Flex>
      </Flex>
      <Flex
        w="100%"
        justify={"space-around"}
        fontSize={"h1"}
        textStyle={"Medium"}
      >
        <Flex direction={"column"} align={"center"} gap={"10px"}>
          <Flex gap={"15px"}>
            <Img src={"/icons/contact/email-icon.svg"} />
            <Text>E-mail</Text>
          </Flex>
          <Link href={`mailto:alex_cubas1.0@hotmail.com`}>
            <Text fontSize={"text2"}>alex_cubas1.0@hotmail.com</Text>
          </Link>
        </Flex>
        <Flex direction={"column"} gap={"10px"} align={"center"}>
          <Flex gap={"15px"}>
            <Img src={"/icons/contact/phone-icon.svg"} />
            <Text>Phone Number</Text>
          </Flex>
          <Link href={`tel:55+ (41) 99238-0193`}>
            <Text fontSize={"text2"}>55+ (41) 99238-0193</Text>
          </Link>
        </Flex>
        <Flex direction={"column"} gap={"10px"} align={"center"}>
          <Flex gap={"15px"}>
            <Img src={"/icons/contact/media-icon.svg"} />
            <Text>Social media</Text>
          </Flex>
          <Flex gap={"30px"}>
            <Link href="https://github.com/alexcubas" isExternal>
              <Img
                w={"30px"}
                h={"30px"}
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
                w={"33px"}
                h={"33px"}
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
