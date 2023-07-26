"use client";

import { newTranslate } from "@/hooks/newTranslate";
import {
  Flex,
  FormControl,
  Text,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

export default function AddTranslate() {
  const [name, setName] = useState("");
  const [pt, setPt] = useState("");
  const [en, setEn] = useState("");
  const toast = useToast();

  async function addTranslate() {
    if (name.length !== 0 && pt.length !== 0 && en.length !== 0) {
      const response: any = await newTranslate({ name: name, pt: pt, en: en });

      const resp = response.data;
      console.log("resp", resp);
      if (resp.status) {
        setName("");
        setPt("");
        setEn("");
        toast({
          title: resp?.message,
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: resp?.error,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: "All inputs need to be filled",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  }

  return (
    <Flex w={"100vw"} h={"100vh"} align={"center"} justify={"center"}>
      <Flex
        borderRadius={"50px"}
        w={"800px"}
        h={"auto"}
        bg={"white"}
        align={"center"}
        justify={"center"}
        _hover={{ boxShadow: "10px 10px 15px -10px rgba(255,255,255,1)" }}
        boxShadow={"5px 5px 15px -10px rgba(255,255,255,1)"}
        py={"30px"}
      >
        <Flex
          direction={"column"}
          textColor={"gray.1000"}
          w={"700px"}
          h={"auto"}
        >
          <Text textAlign={"center"} textStyle={"Bold"} fontSize={"h1"}>
            TRANSLATE
          </Text>
          <FormControl>
            <FormLabel mt={"30px"}>Name</FormLabel>
            <Input
              mb={"20px"}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <FormLabel>Pt</FormLabel>
            <Textarea
              mb={"20px"}
              h={"150px"}
              value={pt}
              onChange={(e) => {
                setPt(e.target.value);
              }}
            />
            <FormLabel>En</FormLabel>
            <Textarea
              mb={"50px"}
              h={"150px"}
              value={en}
              onChange={(e) => {
                setEn(e.target.value);
              }}
            />
            <Button
              w={"full"}
              h={"50px"}
              bg={"gray.2000"}
              textColor={"white"}
              borderRadius={"50px"}
              _hover={{ opacity: "90%" }}
              onClick={() => addTranslate()}
            >
              Send
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </Flex>
  );
}
