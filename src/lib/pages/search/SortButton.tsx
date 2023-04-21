import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import type { FC } from "react";
import React from "react";
import { FaChevronCircleDown } from "react-icons/fa";

interface ISortButtonProps {
  setButtonValue: (sortOrder: number) => void;
}
const SortButton: FC<ISortButtonProps> = ({ setButtonValue }) => {
  const [buttonText, setButtonText] = React.useState("Default");

  const buttonTextHandler = (value: number, text: string) => {
    setButtonText(text);
    setButtonValue(value);
  };
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronCircleDown />}>
        {buttonText}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => buttonTextHandler(0, "Default")}>
          Default
        </MenuItem>
        <MenuItem onClick={() => buttonTextHandler(1, "Price - Low to High")}>
          {" "}
          Price - Low to High{" "}
        </MenuItem>
        <MenuItem onClick={() => buttonTextHandler(-1, "Price - High to Low")}>
          {" "}
          Price - High to Low{" "}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortButton;
