import { Stack } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack spacing="0">
      <Header />
      {children}
      <Footer />
    </Stack>
  );
};

export default Layout;
