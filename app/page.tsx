"use client";

import About from "@/components/about/About";
import AboutMob from "@/components/about/AboutMob";
import Contact from "@/components/Contact";
import HeaderDesktop from "@/components/header/Header";
import HeaderMob from "@/components/header/HeaderMob";
import Main from "@/components/main/Main";
import MainMob from "@/components/main/MainMob";
import Portfolio from "@/components/Portfolio";
import Stacks from "@/components/Stacks";
import { useBreakpointValue } from "@chakra-ui/react";

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
          <HeaderMob /> <MainMob /> <AboutMob />
        </>
      ) : (
        <>
          <HeaderDesktop /> <Main /> <About />
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
