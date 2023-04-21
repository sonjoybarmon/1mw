import {
  Link as CLink,
  Container,
  Flex,
  HStack,
  Spacer,
  // eslint-disable-next-line prettier/prettier
  useDisclosure
} from "@chakra-ui/react";
import Link from "next/link";

import Logo from "lib/components/Logo";
import SearchInput from "lib/components/SearchInput";

import MobileSideDrawer from "./MobileSideDrawer";
import Toolbar from "./Toolbar";

const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure();
  const navLinks = [
    {
      name: "612-400-9000",
      path: "tel:+16124009000",
    },
    {
      name: "INFO@1MW.COM",
      path: "mailto:info@1mw.com",
    },
    {
      name: "ABOUT",
      path: "/about",
    },
    // {
    //   name: "ABOUT",
    //   path: "/about",
    // },
  ];

  return (
    <>
      <Flex as="nav" pos="sticky" top="0" zIndex="sticky" bg="white">
        <Container maxW="container.xl" pl="3" pr="3" py="4">
          <Flex
            gap="6"
            justifyContent="center"
            // alignItems="center"
            flexDir={{ base: "column", lg: "row" }}
          >
            <Toolbar onToggle={onToggle} />
            <HStack flex="18" display={{ base: "none", md: "flex" }}>
              <Logo />
              {navLinks.map((link) => (
                <Link
                  href={link.path}
                  key={link.name}
                  className="linkcssheader"
                >
                  <CLink
                    fontSize={{
                      base: "20px",
                      md: "sm",
                      xl: "20px",
                      "20px": "10px",
                    }}
                    as="div"
                  >
                    {link.name}
                  </CLink>
                </Link>
              ))}
            </HStack>
            <HStack flex="5">
              <SearchInput />
            </HStack>
            <Spacer flex="1" display={{ base: "none", xl: "block" }} />
          </Flex>
        </Container>
      </Flex>
      <MobileSideDrawer
        {...{
          isOpen,
          onClose,
        }}
      >
        {navLinks.map((link) => (
          <Link href={link.path} key={link.name} onClick={onToggle}>
            <CLink fontSize="lg" fontWeight="medium" as="div">
              {link.name}
            </CLink>
          </Link>
        ))}
      </MobileSideDrawer>
    </>
  );
};

export default Header;
