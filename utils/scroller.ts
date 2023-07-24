import { scroller } from "react-scroll";

export default function scrollTo(className: string) {
  scroller.scrollTo(className, {
    duration: 500,
    delay: 0,
    smooth: "easeInOutQuad",
    offset: -80,
  });
}
