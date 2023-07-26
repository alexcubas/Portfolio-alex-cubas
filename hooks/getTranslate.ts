import { api } from "@/services/api";
import { DataTranslateType } from "@/types/dataTranslate";

export async function getTranslate() {
  try {
    const { data } = await api.get("/Translate");
    const resp: DataTranslateType[] = data.translate;
    return resp;
  } catch (error) {
    console.error(error);
  }
}
