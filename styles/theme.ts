import { extendTheme, theme } from "@chakra-ui/react";

const breakpoints = {
  xs: "35rem", // 576px
  sm: "48rem", // 768px
  md: "62rem", // 992px
  lg: "75rem", // 1200px
  xl: "90.625rem", // 1400px
};

export const stylePersonalProfile = extendTheme({
  breakpoints,
  colors: {
    green: {
      1000: "#12A652",
    },
    blue: {
      1000: "#448FF2",
    },
    gradient: {
      1000: "linear-gradient(90deg, #12A652 0%, #448FF2 100%);",
    },
    gray: {
      1000: "#3B3B3B",
      2000: "#343434",
    },
  },
  fonts: {
    heading: "Poppins, Noto Sans, Arial, sans-serif",
    body: "Poppins, Noto Sans, Arial, sans-serif",
  },
  fontSizes: {
    title: "80px",
    subTitle: "60px",
    text1: "22px",
    text2: "16px",
    text3: "13px",
    h1: "30px",
  },

  textStyles: {
    Regular: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: "400",
    },
    Medium: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: "500",
    },
    Bold: {
      fontFamily: "Poppins, Arial, sans-serif",
      fontWeight: "700",
    },
  },
  styles: {
    global: {
      body: {
        bg: "#343434",
        color: "white",
      },
    },
  },
});
