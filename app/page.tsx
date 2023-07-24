"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import HeaderDesktop from "@/components/Header";
import Main from "@/components/Main";
import Portfolio from "@/components/Portfolio";
import Stacks from "@/components/Stacks";
import { useBreakpointValue } from "@chakra-ui/react";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: true,
    sm: true,
    md: true,
    lg: false,
    xlg: false,
  });
  return (
    <div>
      <HeaderDesktop />
      <Main />
      <About />
      <Stacks />
      <Portfolio />
      <Contact />
    </div>
  );
}
