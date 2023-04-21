/* eslint-disable prettier/prettier */
import {
  Box, Flex, Heading, Link as ChakraLink,
  Stack,
  Text,
  useColorMode
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";


const Page404 = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { colorMode } = useColorMode();

  return (
    <Flex minHeight="70vh" direction="column" justifyContent="center">
      <NextSeo title="404 Not Found" />
      {/* <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={{ base: "100%", sm: "70%", md: "60%" }}
        margin="0 auto"
      >
        <Image
          src="/404 Error-pana.svg"
          alt="Error 404 not found Illustration"
        />
      </MotionBox> */}
      <Stack fontSize="1.6rem" display="flex" alignItems="center">
      <Text fontWeight="bold" fontSize='4xl'>404</Text>
      <Text fontWeight="bold">THE PROPERTY HAS MOVED</Text>
      <Text color="blue" fontWeight="bold"><a href="/">RETURN HOME</a></Text>
      </Stack>
      <Text textAlign="center" fontSize="xs" color="gray">
        <ChakraLink
          href="https://stories.freepik.com/web"
          isExternal
          rel="noopener noreferrer"
        >
          {/* Illustration by Freepik Stories */}
        </ChakraLink>
      </Text>

      <Box marginY={4}>
        <Heading textAlign="center" size="lg">
          {/* Page not Found. */}
        </Heading>

        {/* <Box textAlign="center" marginTop={4}>
          <Text fontSize="sm" color="gray">
            It&apos;s Okay!
          </Text>
          <Button
            as={Link}
            href="/"
            backgroundColor={colorMode === "light" ? "gray.300" : "teal.500"}
            size="sm"
          >
            Let&apos;s Head Back
          </Button>
        </Box> */}
      </Box>
    </Flex>
  );
};

export default Page404;
