import { Flex, Text } from "@chakra-ui/react";
import { useContext, useEffect } from "react";
import interestsMap from "../../public/arrayInterest.json";
import CardInterest from "../card/cardInterest";
import ApplicationContext from "@/contexts/provider/contextTranslate";
import filterTranslate from "@/utils/filterTranslate";

export default function About() {
  const { isEn } = useContext(ApplicationContext);
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
              text="GAMES"
              width="100px"
              height="55px"
            />
            <CardInterest
              imagemSrc="music-icon.svg"
              text="MUSIC"
              width="73px"
              height="73px"
            />
            <CardInterest
              imagemSrc="coffee-icon.svg"
              text="COFFEE"
              width="76px"
              height="76px"
            />
            <CardInterest
              imagemSrc="gym-icon.svg"
              text="GYM"
              width="100px"
              height="50px"
            />
            <CardInterest
              imagemSrc="series-icon.svg"
              text="SERIES"
              width="83px"
              height="58px"
            />
            <CardInterest
              imagemSrc="travel-icon.svg"
              text="TRAVEL"
              width="74px"
              height="74px"
            />
            <CardInterest
              imagemSrc="investment-icon.svg"
              text="INVESTMENT"
              width="94px"
              height="94px"
            />
            <CardInterest
              imagemSrc="food-icon.png"
              text="FOOD"
              width="83px"
              height="82px"
            />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
