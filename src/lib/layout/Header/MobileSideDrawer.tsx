import {
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Drawer,
  DrawerHeader,
  Stack,
} from "@chakra-ui/react";
import type { FC, ReactNode } from "react";

interface IDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const MobileSideDrawer: FC<IDrawerProps> = ({ isOpen, onClose, children }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseButton />
        </DrawerHeader>
        <Stack p="4">{children}</Stack>
      </DrawerContent>
    </Drawer>
  );
};
export default MobileSideDrawer;
