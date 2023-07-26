import { api } from "@/services/api";

type getTranslateType = {
  name: string;
  pt: string;
  en: string;
};

export async function newTranslate({ name, pt, en }: getTranslateType) {
  try {
    const { data } = await api.post("/Translate", null, {
      params: {
        name: name,
        pt: pt,
        en: en,
      },
    });
    return { data };
  } catch (error) {
    console.error(error);
  }
}
