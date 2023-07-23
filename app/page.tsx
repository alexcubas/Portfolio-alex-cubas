"use client";

import About from "@/components/About";
import Contact from "@/components/Contact";
import HeaderDesktop from "@/components/Header";
import Main from "@/components/Main";
import Portfolio from "@/components/Portfolio";
import Stacks from "@/components/Stacks";

export default function Home() {
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
