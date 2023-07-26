"use client";

import { ApplicationTranslateProvider } from "@/contexts/provider/applicationTranslateProvider";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ApplicationTranslateProvider>{children}</ApplicationTranslateProvider>
    </>
  );
};
