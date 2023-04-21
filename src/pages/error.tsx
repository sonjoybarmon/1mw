/* eslint-disable react/jsx-no-undef */
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import Link from "next/link";

const Page404forPrperty = () => {
  return (
    <Flex minHeight="70vh">
      <NextSeo title="404 Not Found" />
      <Box display="flex" justifyContent="space-around" pl="40rem">
        <Stack>
          <Text fontSize="9rem" fontWeight="bold" pt={8} pb="-1.5" pl="6rem">
            404
          </Text>
          <Text fontSize="1.3rem" fontWeight="bold" pl="6.5rem">
            This page has moved.
          </Text>
          <Text fontSize="1.8rem" fontWeight="bold" pl="3rem" pb={10} mb="-2">
            We will have this cleaned up
          </Text>
          <Link href="/">
            <Image
              pl="8rem"
              src="./images/home/Homepage.png"
              width="50"
              height="50"
              alt="A beautiful image"
            />
          </Link>
          {/* <Link href="/">
            <Image
              src="./images/"
              width="50%"
              pb={6}
              height="15%"
              alt="A beautiful image"
            />
          </Link> */}
        </Stack>
        {/* <Image
          src="./images/home/Wrongprop1.png"
          width="50%"
          height="100%"
          alt="A beautiful image"
        /> */}
      </Box>
    </Flex>
  );
};

export default Page404forPrperty;
