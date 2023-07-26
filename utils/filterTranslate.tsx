import ApplicationContext from "@/contexts/provider/contextTranslate";
import { DataTranslateType } from "@/types/dataTranslate";
import { useContext } from "react";

export default function filterTranslate(name: string) {
  const { dataTranslate, isEn } = useContext(ApplicationContext);
  let correctName = "";
  if (dataTranslate) {
    dataTranslate.map((item: DataTranslateType) => {
      if (item.name === name) {
        correctName = isEn ? item?.en : item?.pt;
      }
    });

    return correctName;
  }
}
