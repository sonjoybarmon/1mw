import { HStack, Box } from "@chakra-ui/react";
import type { FC } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import Logo from "lib/components/Logo";

interface IToolbarProps {
  onToggle: () => void;
}

const Toolbar: FC<IToolbarProps> = ({ onToggle }) => {
  return (
    <HStack justify="space-between" display={{ base: "flex", md: "none" }}>
      <Logo />

      <Box cursor="pointer" fontSize="2xl" onClick={onToggle}>
        <HiOutlineMenuAlt3 />
      </Box>
    </HStack>
  );
};
export default Toolbar;
