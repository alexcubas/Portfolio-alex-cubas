import { Flex, Text } from "@chakra-ui/react";
import CardStack from "../card/cardStack";
import ApplicationContext from "@/contexts/provider/contextTranslate";
import { useContext } from "react";
import filterTranslate from "@/utils/filterTranslate";

export default function Stacks() {
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
      <Flex h={"auto"} direction={"column"} pb={"60px"}>
        <Flex textStyle={"Bold"} fontSize={"subTitle"} gap={"30px"}>
          <Text textColor={"green.1000"}>{isEn ? "MY" : "MINHAS"}</Text>
          <Text>{isEn ? "STACK" : "HABILIDADES"}</Text>
        </Flex>
      </Flex>
      <Flex justify={"center"} px={"50px"} gap={"30px"} wrap={"wrap"}>
        <CardStack
          srcImg="js-icon.png"
          title="JavaScript"
          text={filterTranslate("stackJS")}
          width="229px"
          height="228px"
        />

        <CardStack
          srcImg="react-icon.png"
          title="React"
          text={filterTranslate("stackR")}
          width="262px"
          height="215px"
        />

        <CardStack
          srcImg="node-icon.png"
          title="NodeJs"
          text={filterTranslate("stackN")}
          width="283px"
          height="195px"
        />

        <CardStack
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
