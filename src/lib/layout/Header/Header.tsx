import {
  Box,
  Link as CLink,
  Flex,
  HStack,
  Spacer,
  // eslint-disable-next-line prettier/prettier
  useDisclosure,
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
      name: "SELL",
      path: "/sell",
    },
    {
      name: "BUY",
      path: "/buy",
    },

    {
      name: "1@1MW.COM",
      path: "mailto:1@1MW.COM",
    },
    {
      name: "612-400-9000",
      path: "tel:+16124009000",
    },

    // {
    //   name: "ABOUT",
    //   path: "/about",
    // },
  ];

  return (
    <>
      <Flex
        as="nav"
        pos="sticky"
        top="0"
        zIndex="sticky"
        bg="white"
        style={{ width: "100%" }}
      >
        <Box
          pl="3"
          pr="3"
          py="4"
          // style={{ width: "100%" }}
        >
          {/* <Container maxW="container.xl" pl="3" pr="3" py="4"> */}
          <Flex
            gap="6"
            // justifyContent="space-between"
            // alignItems="center"
            flexDir={{ base: "column", lg: "row" }}
            // style={{ width: "100%" }}
          >
            <Toolbar onToggle={onToggle} />
            <HStack flex="18" display={{ base: "none", md: "flex" }}>
              <Logo />
              <Link href="/sell" className="linkcssheader">
                <CLink
                  fontSize={{
                    base: "20px",
                    md: "sm",
                    xl: "20px",
                    "20px": "10px",
                  }}
                  as="div"
                  style={{ display: "inline-block" }}
                >
                  SELL
                </CLink>
              </Link>
              <Link href="/buy" className="linkcssheader">
                <CLink
                  fontSize={{
                    base: "20px",
                    md: "sm",
                    xl: "20px",
                    "20px": "10px",
                  }}
                  as="div"
                  style={{ display: "inline-block" }}
                >
                  BUY
                </CLink>
              </Link>
              <Link href="mailto:1@1MW.COM" className="linkcssheader">
                <CLink
                  fontSize={{
                    base: "20px",
                    md: "sm",
                    xl: "20px",
                    "20px": "10px",
                  }}
                  as="div"
                  style={{ display: "inline-block" }}
                >
                  1@1MW.COM
                </CLink>
              </Link>
              <Link href="tel:+16124009000" className="linkcssheader">
                <CLink
                  fontSize={{
                    base: "20px",
                    md: "sm",
                    xl: "20px",
                    "20px": "10px",
                  }}
                  as="div"
                  style={{ display: "inline-block", width: "120px" }}
                >
                  612-400-9000
                </CLink>
              </Link>
              {/* {navLinks.map((link) => (
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
                    style={{ display: "inline-block" }}
                  >
                    {link.name}
                  </CLink>
                </Link>
              ))} */}
            </HStack>
            {/* <HStack> */}
            <HStack flex="5" style={{ marginLeft: "120px" }}>
              <SearchInput />
            </HStack>
            {/* <Box style={{ display: "block" }}></Box> */}
            <Spacer flex="1" display={{ base: "none", xl: "block" }} />
          </Flex>
        </Box>
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
