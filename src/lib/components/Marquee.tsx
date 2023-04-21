import type { FC, ReactNode } from "react";
import FastMarquee from "react-fast-marquee";

interface MarqueeProps {
  children: ReactNode;
}

const Marquee: FC<MarqueeProps> = ({ children }) => {
  return <FastMarquee gradient={false}>{children}</FastMarquee>;
};

export default Marquee;
