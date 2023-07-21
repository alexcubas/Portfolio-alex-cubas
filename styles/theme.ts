import { extendTheme, theme } from "@chakra-ui/react";

const breakpoints = {
  xs: "35rem", // 576px
  sm: "48rem", // 768px
  md: "62rem", // 992px
  lg: "75rem", // 1200px
  lp: "81.25rem", // 1300px
  xl: "87.5rem", // 1400px
};

const sizes = {
  sizes: {
    ...theme.space,
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    container: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1480px",
    },
  },
};

export const stylePersonalProfile = extendTheme({
  sizes,
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
