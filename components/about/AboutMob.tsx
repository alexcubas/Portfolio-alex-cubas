import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import CardInterestMob from "../card/cardInterestMob";
import { motion, useAnimation } from "framer-motion";

export default function AboutMob() {
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
    <Flex
      w={"100%"}
      h={"auto"}
      bg={"gray.1000"}
      direction={"column"}
      pb={"60px"}
      id={"about"}
    >
      <Flex
        mt={"20px"}
        direction={"column"}
        w={"100%"}
        align={"center"}
        mb={"50px"}
        as={motion.div}
        initial={{ y: 150, opacity: 0 }}
        animate={controls}
      >
        <Flex textStyle={"Bold"} fontSize={"h1"} gap={"15px"}>
          <Text>ABOUT</Text>
          <Text textColor={"green.1000"}>ME</Text>
        </Flex>
        <Text
          textAlign={"center"}
          w={"70%"}
          textStyle={"Regular"}
          fontSize={"text3"}
          opacity={"60%"}
        >
          Passionate Full Stack Developer, skilled in creating seamless web
          experiences and building robust applications. Always eager to explore
          new technologies and embrace exciting challenges. With a track record
          of successful projects and a strong foundation in JavaScript, React,
          Node.js, and more, I am committed to delivering cutting-edge solutions
          that leave a lasting impact. My dedication to continuous learning
          drives me to stay ahead of industry trends, ensuring I bring the
          latest advancements to each project.
        </Text>
      </Flex>
      <Flex justify={"center"} direction={"column"}>
        <Flex direction={"column"} align={"center"} mb={"30px"}>
          <Text textStyle={"Bold"} fontSize="h1" mb={"20px"}>
            Personal Details
          </Text>
          <Flex
            fontSize={{ lg: "text2", xl: "text1" }}
            gap={"20px"}
            justify={"center"}
          >
            <Flex
              textColor={"green.1000"}
              textStyle={"Bold"}
              direction={"column"}
              gap={"20px"}
            >
              <Text>Age:</Text>
              <Text>Email:</Text>
              <Text>Phone:</Text>
              <Text>Address:</Text>
              <Text>Languages:</Text>
            </Flex>
            <Flex direction={"column"} textStyle={"Regular"} gap={"20px"}>
              <Text>25 Years</Text>
              <Text>alex_cubas1.0@hotmail.com</Text>
              <Text>+55 (41) 99238-0193</Text>
              <Text>Brazil</Text>
              <Text>English, Portuguese</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction={"column"} align={"center"}>
          <Text textStyle={"Bold"} fontSize="h1" mb={"30px"}>
            My Interests
          </Text>
          <Flex flexWrap={"wrap"} gap={"30px"} px={"20px"} justify={"center"}>
            <CardInterestMob
              imagemSrc="game-icon.svg"
              text="GAMES"
              width="75px"
              height="41px"
            />
            <CardInterestMob
              imagemSrc="music-icon.svg"
              text="MUSIC"
              width="54px"
              height="54px"
            />
            <CardInterestMob
              imagemSrc="coffee-icon.svg"
              text="COFFEE"
              width="55px"
              height="55px"
            />
            <CardInterestMob
              imagemSrc="gym-icon.svg"
              text="GYM"
              width="75px"
              height="38px"
            />
            <CardInterestMob
              imagemSrc="series-icon.svg"
              text="SERIES"
              width="61px"
              height="41px"
            />
            <CardInterestMob
              imagemSrc="travel-icon.svg"
              text="TRAVEL"
              width="55px"
              height="55px"
            />
            <CardInterestMob
              imagemSrc="investment-icon.svg"
              text="INVESTMENT"
              width="71px"
              height="71px"
            />
            <CardInterestMob
              imagemSrc="food-icon.png"
              text="FOOD"
              width="61px"
              height="61px"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
