import { Flex, Text } from "@chakra-ui/react";
import CardPortfolio from "../card/cardPortfolio";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore from "swiper/core";
import { Navigation, Autoplay } from "swiper/modules";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);

export default function Portfolio() {
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
          <Text textColor={"green.1000"}>MY</Text>
          <Text>PORTFOLIO</Text>
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
              subtitle="Linglong Website - Front-end & Project Management"
              text="As both front-end developer and project manager, I led the development of the LingLong website using Next.js. Our goal: an exceptional, responsive user experience. Despite the 3-month deadline, we delivered a fully functional website. Additionally, I oversaw a dynamic dashboard for price updates and promotions. Worked with a skilled team of three front-end developers to achieve project success."
              srcImg="/linglong-port.png"
              idColor="gradient"
              linkHref="https://lojalinglong.com.br/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardPortfolio
              title="MICHELIN"
              subtitle="Tire E-commerce Website"
              text="As part of a team of three front-end developers, I led the development of the front-end for the Michelin website using Next.js. Our primary goal was to deliver an outstanding customer experience through a responsive and user-friendly website. The project was successfully completed over a span of 18 months."
              srcImg="/michelin-port.png"
              textColor="#27509B"
              linkHref="https://michelin.pneufree.com.br/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardPortfolio
              title="XBRI"
              subtitle="Tire E-commerce Website"
              text="I played a crucial role in the front-end development of a Next.js website, where our main focus was to provide an exceptional customer experience with a responsive and user-friendly interface. The project was successfully completed in just 9 months, with a collaborative effort involving a team of skilled front-end developers."
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
