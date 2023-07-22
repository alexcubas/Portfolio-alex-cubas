"use client";

import About from "@/components/About";
import HeaderDesktop from "@/components/Header";
import Main from "@/components/Main";
import Stacks from "@/components/Stacks";

export default function Home() {
  return (
    <div>
      <HeaderDesktop />
      <Main />
      <About />
      <Stacks />
    </div>
  );
}
