import { Flex, Text } from "@chakra-ui/react";
import CardStack from "./card/cardStack";

export default function Stacks() {
  return (
    <Flex
      mt={"30px"}
      direction={"column"}
      w={"100%"}
      align={"center"}
      mb={"100px"}
    >
      <Flex h={"auto"} direction={"column"} pb={"60px"}>
        <Flex textStyle={"Bold"} fontSize={"subTitle"} gap={"30px"}>
          <Text textColor={"green.1000"}>MY</Text>
          <Text>STACKS</Text>
        </Flex>
      </Flex>
      <Flex justify={"center"} gap={"15px"} px={"50px"} flexFlow={"row wrap"}>
        <CardStack
          srcImg="js-icon.png"
          title="JavaScript"
          text="JavaScript is a programming language that can be used to add interactivity to web pages. It can be used to create games, animations, interactive forms, and more."
          width="229px"
          height="228px"
        />
        <CardStack
          srcImg="react-icon.png"
          title="React"
          text="ReactJS is a JavaScript library for building user interfaces. It is declarative, component-based, and efficient."
          width="262px"
          height="215px"
        />
        <CardStack
          srcImg="node-icon.png"
          title="NodeJs"
          text="Node.js is a JavaScript runtime environment for server-side applications. It is open-source, cross-platform, and asynchronous."
          width="283px"
          height="195px"
        />
        <CardStack
          srcImg="mongo-icon.png"
          title="MongoDB"
          text="MongoDB is a document database that stores data in JSON-like documents. It is open-source, scalable, and flexible."
          width="237px"
          height="184px"
        />
      </Flex>
    </Flex>
  );
}
