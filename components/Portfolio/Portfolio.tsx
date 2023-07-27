import { Flex, Text } from "@chakra-ui/react";
import CardPortfolio from "../card/cardPortfolio";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore from "swiper/core";
import { Navigation, Autoplay } from "swiper/modules";
import ApplicationContext from "@/contexts/provider/contextTranslate";
import { useContext } from "react";
import filterTranslate from "@/utils/filterTranslate";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);

export default function Portfolio() {
  const { isEn } = useContext(ApplicationContext);

  return (
    <Flex
      pt={"50px"}
      direction={"column"}
      w={"100%"}
      bg={"gray.1000"}
      align={"center"}
      pb={"100px"}
      id={"port"}
    >
      <Flex h={"auto"} direction={"column"} pb={"60px"}>
        <Flex textStyle={"Bold"} fontSize={"subTitle"} gap={"30px"}>
          <Text textColor={"green.1000"}>{isEn ? "MY" : "MEU"}</Text>
          <Text>{isEn ? "PORTFOLIO" : "PORTIFÓLIO"}</Text>
        </Flex>
      </Flex>
      <Flex align={"center"}>
        <Swiper
          slidesPerView={1}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          loop={true}
          autoplay={{
            delay: 3000, // Defina o intervalo de tempo (em milissegundos) entre os slides
            disableOnInteraction: false, // Mantenha o autoplay mesmo quando o usuário interagir
          }}
          style={{
            width: "1300px",
            margin: "auto",
          }} // Defina a largura desejada e centralize o carrossel
        >
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <SwiperSlide>
            <CardPortfolio
              title="LINGLONG"
              subtitle={
                isEn
                  ? "Linglong Website - Front-end & Project Management"
                  : "Linglong Website - Front-end e Gerenciamento de Projetos"
              }
              text={filterTranslate("portL")}
              srcImg="/linglong-port.png"
              idColor="gradient"
              linkHref="https://lojalinglong.com.br/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardPortfolio
              title="MICHELIN"
              subtitle={
                isEn
                  ? "Tire E-commerce Website"
                  : "Website de comércio de pneus"
              }
              text={filterTranslate("portM")}
              srcImg="/michelin-port.png"
              textColor="#27509B"
              linkHref="https://michelin.pneufree.com.br/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardPortfolio
              title="XBRI"
              subtitle={
                isEn
                  ? "Tire E-commerce Website"
                  : "Website de comércio de pneus"
              }
              text={filterTranslate("portX")}
              srcImg="/xbri-port.png"
              textColor="#E3151A"
              linkHref="https://xbri.com.br/"
            />
          </SwiperSlide>
        </Swiper>
      </Flex>
    </Flex>
  );
}
