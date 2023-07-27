import { Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import CardInterestMob from "../card/cardInterestMob";
import { motion, useAnimation } from "framer-motion";
import ApplicationContext from "@/contexts/provider/contextTranslate";
import filterTranslate from "@/utils/filterTranslate";

export default function AboutMob() {
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
          <Text>{isEn ? "ABOUT" : "SOBRE"}</Text>
          <Text textColor={"green.1000"}>{isEn ? "ME" : "MIM"}</Text>
        </Flex>
        <Text
          textAlign={"center"}
          w={"70%"}
          textStyle={"Regular"}
          fontSize={"text3"}
          opacity={"60%"}
        >
          {filterTranslate("aboutText")}
        </Text>
      </Flex>
      <Flex justify={"center"} direction={"column"}>
        <Flex direction={"column"} align={"center"} mb={"30px"}>
          <Text textStyle={"Bold"} fontSize="h1" mb={"20px"}>
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
        <Flex direction={"column"} align={"center"}>
          <Text textStyle={"Bold"} fontSize="h1" mb={"30px"}>
            {isEn ? "My Interests" : "Meus Interesses"}
          </Text>
          <Flex flexWrap={"wrap"} gap={"30px"} px={"20px"} justify={"center"}>
            <CardInterestMob
              imagemSrc="game-icon.svg"
              text={isEn ? "GAMES" : "JOGOS"}
              width="75px"
              height="41px"
            />
            <CardInterestMob
              imagemSrc="music-icon.svg"
              text={isEn ? "MUSIC" : "MUSICA"}
              width="54px"
              height="54px"
            />
            <CardInterestMob
              imagemSrc="coffee-icon.svg"
              text={isEn ? "COFFEE" : "CAFÉ"}
              width="55px"
              height="55px"
            />
            <CardInterestMob
              imagemSrc="gym-icon.svg"
              text={isEn ? "GYM" : "ACADEMIA"}
              width="75px"
              height="38px"
            />
            <CardInterestMob
              imagemSrc="series-icon.svg"
              text={isEn ? "SERIES" : "SÉRIES"}
              width="61px"
              height="41px"
            />
            <CardInterestMob
              imagemSrc="travel-icon.svg"
              text={isEn ? "TRAVEL" : "VIAJAR"}
              width="55px"
              height="55px"
            />
            <CardInterestMob
              imagemSrc="investment-icon.svg"
              text={isEn ? "INVESTIMENT" : "INVESTIMENTO"}
              width="71px"
              height="71px"
            />
            <CardInterestMob
              imagemSrc="food-icon.png"
              text={isEn ? "FOOD" : "COMIDA"}
              width="61px"
              height="61px"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
