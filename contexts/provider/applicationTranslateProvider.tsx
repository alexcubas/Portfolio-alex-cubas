import { getTranslate } from "@/hooks/getTranslate";
import { DataTranslateType } from "@/types/dataTranslate";
import { createContext, useState } from "react";
import ApplicationContext from "./contextTranslate";

export function ApplicationTranslateProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dataTranslate, setDataTranslate] = useState<DataTranslateType[]>([]);
  const [isEn, setIsEn] = useState<boolean>(true);

  const getDadosTranslate = async () => {
    try {
      const resp = await getTranslate();
      resp && setDataTranslate(resp);
    } catch (error) {
      console.log("Error na requisição", error);
    }
  };

  return (
    <ApplicationContext.Provider
      value={{ getDadosTranslate, dataTranslate, isEn, setIsEn }}
    >
      {children}
    </ApplicationContext.Provider>
  );
}
