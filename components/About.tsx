import { Flex, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { interests } from "../public/arrayInterest.json";
import CardInterest from "./card/cardInterest";

export default function About() {
  useEffect(() => {
    console.log("interestsArray", interests);
  }, []);

  return (
    <Flex w={"100%"} h={"100vh"} bg={"gray.1000"} direction={"column"}>
      <Flex direction={"column"} w={"100%"} align={"center"}>
        <Flex>
          <Text>ABOUT</Text>
          <Text>ME</Text>
        </Flex>
        <Text textAlign={"center"} w={"70%"}>
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
      <Flex>
        <Flex direction={"column"}>
          <Text>Personal Details</Text>
          <Flex>
            <Flex direction={"column"}>
              <Text>Age:</Text>
              <Text>Email:</Text>
              <Text>Phone:</Text>
              <Text>Address:</Text>
              <Text>Languages:</Text>
            </Flex>
            <Flex direction={"column"}>
              <Text>25 Years</Text>
              <Text>alex_cubas1.0@hotmail.com</Text>
              <Text>+55 (41) 99238-0193</Text>
              <Text>Brazil</Text>
              <Text>English, Portuguese</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <CardInterest />
          <Text>My Interests</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
