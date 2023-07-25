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
import { useBreakpointValue } from "@chakra-ui/react";
import StacksMob from "../components/stack/StacksMob";
import PortfolioMob from "@/components/Portfolio/PortfolioMob";
import ContactMob from "@/components/contact/ContactMob";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    ss: true,
    xs: true,
    sm: true,
    md: true,
    lg: false,
    xl: false,
  });

  return (
    <div>
      {isWideVersion ? (
        <>
          <HeaderMob /> <MainMob /> <AboutMob /> <StacksMob /> <PortfolioMob />{" "}
          <ContactMob />
        </>
      ) : (
        <>
          <HeaderDesktop /> <Main /> <About /> <Stacks /> <Portfolio />{" "}
          <Contact />
        </>
      )}

      {/* <SwiperComponent /> */}
      {/* <About />
      <Stacks />
      <Portfolio />
      <Contact /> */}
    </div>
  );
}
