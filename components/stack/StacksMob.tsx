import { Flex, Text } from "@chakra-ui/react";
import CardStackMob from "../card/cardStackMob";
import ApplicationContext from "@/contexts/provider/contextTranslate";
import { useContext } from "react";
import filterTranslate from "@/utils/filterTranslate";

export default function StacksMob() {
  const { isEn } = useContext(ApplicationContext);
  return (
    <Flex
      mt={"30px"}
      direction={"column"}
      w={"100%"}
      align={"center"}
      mb={"100px"}
      id={"stack"}
    >
      <Flex h={"auto"} direction={"column"} pb={"30px"}>
        <Flex textStyle={"Bold"} fontSize={"h1"} gap={"15px"}>
          <Text textColor={"green.1000"}>{isEn ? "MY" : "MINHAS"}</Text>
          <Text>{isEn ? "STACK" : "HABILIDADES"}</Text>
        </Flex>
      </Flex>
      <Flex justify={"center"} gap={"30px"} wrap={"wrap"}>
        <CardStackMob
          srcImg="js-icon.png"
          title="JavaScript"
          text={filterTranslate("stackJS")}
          width="229px"
          height="228px"
        />

        <CardStackMob
          srcImg="react-icon.png"
          title="React"
          text={filterTranslate("stackR")}
          width="262px"
          height="215px"
        />

        <CardStackMob
          srcImg="node-icon.png"
          title="NodeJs"
          text={filterTranslate("stackN")}
          width="283px"
          height="195px"
        />

        <CardStackMob
          srcImg="mongo-icon.png"
          title="MongoDB"
          text={filterTranslate("stackM")}
          width="237px"
          height="184px"
        />
      </Flex>
    </Flex>
  );
}
