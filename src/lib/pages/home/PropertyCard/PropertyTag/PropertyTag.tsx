import { Heading, Text } from "@chakra-ui/react";
import cn from "clsx";

import s from "./PropertyTag.module.css";

interface PropertyTagProps {
  className?: string;
  name: string;
  price: string;
  fontSize?: number;
  dark?: boolean;
}

const PropertyTag: React.FC<PropertyTagProps> = ({
  name,
  price,
  className = "",
  fontSize = 14,
  dark = false,
}: PropertyTagProps) => {
  return (
    <div className={cn(s.root, className)}>
      <Heading
        pb="2"
        px="4"
        bg={dark ? "black" : "white"}
        color={dark ? "white" : "black"}
      >
        <span
          style={{
            fontSize: `${fontSize}px`,
          }}
        >
          {name}
        </span>
      </Heading>
      <span>
        <Text
          p="4"
          bg={dark ? "black" : "white"}
          as="span"
          fontWeight="bold"
          color={dark ? "white" : "black"}
          fontSize="2xl"
        >
          {price}
        </Text>
      </span>
    </div>
  );
};

export default PropertyTag;
