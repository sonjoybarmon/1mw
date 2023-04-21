import { HStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

interface ILogoProps {
  size?: "sm" | "md" | "lg";
}

const Logo: FC<ILogoProps> = ({ size = "sm" }) => {
  // eslint-disable-next-line no-nested-ternary
  const sideValue = size === "sm" ? 40 : size === "md" ? 60 : 80;

  return (
    <Link href="/">
      <HStack mr="4">
        <Image
          src="/images/home/Logo_New.png"
          alt="mike wilen logo"
          width={sideValue + 150}
          height={sideValue}
        />
      </HStack>
    </Link>
  );
};
export default Logo;
