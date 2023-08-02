import { Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import interestsMap from "../../public/arrayInterest.json";
import CardInterest from "../card/cardInterest";
import ApplicationContext from "@/contexts/provider/contextTranslate";
import filterTranslate from "@/utils/filterTranslate";
import { motion, useAnimation } from "framer-motion";

export default function About() {
  const { isEn } = useContext(ApplicationContext);
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
      as={motion.div}
      initial={{ y: 150, opacity: 0 }}
      animate={controls}
    >
      <Flex
        mt={"30px"}
        direction={"column"}
        w={"100%"}
        align={"center"}
        mb={"50px"}
      >
        <Flex textStyle={"Bold"} fontSize={"subTitle"} gap={"30px"}>
          <Text> {isEn ? "ABOUT" : "SOBRE"} </Text>
          <Text textColor={"green.1000"}> {isEn ? "ME" : "MIM"} </Text>
        </Flex>
        <Text
          textAlign={"center"}
          w={"70%"}
          textStyle={"Bold"}
          fontSize={{ lg: "text2", xl: "text1" }}
          opacity={"60%"}
        >
          {filterTranslate("aboutText")}
        </Text>
      </Flex>
      <Flex justify={"center"}>
        <Flex w={"30%"} direction={"column"}>
          <Text
            textStyle={"Bold"}
            fontSize={{ lg: "h1", xl: "subTitle" }}
            mb={"90px"}
          >
            {isEn ? "Personal Details" : "Detalhes Pessoais"}
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
              <Text>{isEn ? "Age:" : "Idade:"}</Text>
              <Text>Email:</Text>
              <Text>{isEn ? "Phone:" : "Telefone:"}</Text>
              <Text>{isEn ? "Address:" : "Endereço:"}</Text>
              <Text>{isEn ? "Languages:" : "Línguas:"}</Text>
            </Flex>
            <Flex direction={"column"} textStyle={"Regular"} gap={"20px"}>
              <Text>{isEn ? "25 Years" : "25 Anos"}</Text>
              <Text>alex_cubas1.0@hotmail.com</Text>
              <Text>+55 (41) 99238-0193</Text>
              <Text>{isEn ? "Brazil" : "Brasil"}</Text>
              <Text>{isEn ? "English, Portuguese" : "Inglês, Português"}</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex w={"60%"} direction={"column"}>
          <Text
            textStyle={"Bold"}
            fontSize={{ lg: "h1", xl: "subTitle" }}
            mb={"50px"}
            ml={"30px"}
          >
            {isEn ? "My Interests" : "Meus Interesses"}
          </Text>
          <Flex flexWrap={"wrap"} gap={"30px"} px={"20px"} justify={"center"}>
            <CardInterest
              imagemSrc="game-icon.svg"
              text={isEn ? "GAMES" : "JOGOS"}
              width="100px"
              height="55px"
            />
            <CardInterest
              imagemSrc="music-icon.svg"
              text={isEn ? "MUSIC" : "MUSICA"}
              width="73px"
              height="73px"
            />
            <CardInterest
              imagemSrc="coffee-icon.svg"
              text={isEn ? "COFFEE" : "CAFÉ"}
              width="76px"
              height="76px"
            />
            <CardInterest
              imagemSrc="gym-icon.svg"
              text={isEn ? "GYM" : "ACADEMIA"}
              width="100px"
              height="50px"
            />
            <CardInterest
              imagemSrc="series-icon.svg"
              text={isEn ? "SERIES" : "SÉRIES"}
              width="83px"
              height="58px"
            />
            <CardInterest
              imagemSrc="travel-icon.svg"
              text={isEn ? "TRAVEL" : "VIAJAR"}
              width="74px"
              height="74px"
            />
            <CardInterest
              imagemSrc="investment-icon.svg"
              text={isEn ? "INVESTIMENT" : "INVESTIMENTO"}
              width="94px"
              height="94px"
            />
            <CardInterest
              imagemSrc="food-icon.png"
              text={isEn ? "FOOD" : "COMIDA"}
              width="83px"
              height="82px"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
