"use client";

import About from "@/components/about/About";
import AboutMob from "@/components/about/AboutMob";
import Contact from "@/components/contact/Contact";
import HeaderDesktop from "@/components/header/Header";
import HeaderMob from "@/components/header/HeaderMob";
import Main from "@/components/main/Main";
import MainMob from "@/components/main/MainMob";
import Portfolio from "@/components/Portfolio/Portfolio";
import Stacks from "@/components/stack/Stacks";
import { Flex, useBreakpointValue } from "@chakra-ui/react";
import StacksMob from "../components/stack/StacksMob";
import PortfolioMob from "@/components/Portfolio/PortfolioMob";
import ContactMob from "@/components/contact/ContactMob";
import { useContext, useEffect } from "react";
import { getTranslate } from "@/hooks/getTranslate";
import ApplicationContext from "@/contexts/provider/contextTranslate";

export default function Home() {
  const { getDadosTranslate, dataTranslate, isEn, setIsEn } =
    useContext(ApplicationContext);
  console.log("dataTranslate", dataTranslate);
  const isWideVersion = useBreakpointValue({
    ss: true,
    xs: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
  });

  useEffect(() => {
    getDadosTranslate();
  }, []);

  return (
    <Flex>
      {!isWideVersion ? (
        <Flex direction={"column"}>
          <HeaderDesktop /> <Main /> <About /> <Stacks /> <Portfolio />
          <Contact />
        </Flex>
      ) : (
        <Flex direction={"column"}>
          <HeaderMob /> <MainMob /> <AboutMob /> <StacksMob /> <PortfolioMob />
          <ContactMob />
        </Flex>
      )}

      {/* <Flex direction={"column"} display={!isWideVersion ? "none" : "flex"}>
        <HeaderMob /> <MainMob /> <AboutMob /> <StacksMob /> <PortfolioMob />
        <ContactMob />
      </Flex>
      <Flex direction={"column"} display={isWideVersion ? "none" : "flex"}>
        <HeaderDesktop /> <Main /> <About /> <Stacks /> <Portfolio />
        <Contact />
      </Flex> */}
    </Flex>
  );
}
