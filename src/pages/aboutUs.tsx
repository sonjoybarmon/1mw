import { Box, Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import type React from "react";
import Marquee from "react-fast-marquee";

const AboutUs: React.FC = () => {
  return (
    <Container py="8" maxW="container.xl">
      <Grid
        // h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={3} colSpan={3}>
          <Image
            src="./images/about/mike_wilen.png"
            alt="Mike Wilen"
            width="600"
            height="600"
          />
        </GridItem>
        <GridItem rowSpan={3} colSpan={2}>
          <Image
            src="./images/about/mike_wilen.png"
            alt="Mike Wilen"
            width="300"
            height="300"
          />
          <Image
            src="./images/about/mike_wilen.png"
            alt="Mike Wilen"
            width="300"
            height="300"
          />
        </GridItem>
        <GridItem colSpan={4} bg="tomato" />
      </Grid>
      <Grid>
        <Marquee>
          <GridItem px={10} py={6}>
            <Text fontSize="2xl">NONLMS.COM</Text>
          </GridItem>
          <GridItem px={10} py={6}>
            <Text fontSize="2xl">LakeMinetonakaRentals.com</Text>
          </GridItem>
          <GridItem px={10} py={6}>
            <Text fontSize="2xl">LakeMinetonakaTownHomes.com</Text>
          </GridItem>
          <GridItem px={10} py={6}>
            <Text fontSize="2xl">LakeVilleHouses.Com</Text>
          </GridItem>
          <GridItem px={10} py={6}>
            <Text fontSize="2xl">1MW.com</Text>
          </GridItem>
          <GridItem px={10} py={6}>
            <Text fontSize="2xl">LakeMinetonakaTownHomes.com</Text>
          </GridItem>
        </Marquee>
      </Grid>
      <Grid templateColumns="repeat(2, 1fr)" gap={6} padding={6}>
        <Grid templateColumns="repeat(1, 1fr)" gap={6} padding={6}>
          <Text>
            conference rooms and dining rooms, we measure our success by yours.
            And in our interactions, we commit to making your real estate
            experience as satisfying as the outcomes we help you achieve. Our
            greatest accomplishment is ensuring that you never have to choose
            between premier representation and exceptional service. So, tell us.
            What do you want to achieve?
          </Text>
          <Text>
            We provide an unparalleled ability to reach the market of
            prospective buyers through our proprietary network of individuals
            who are directly or indirectly know others who are actively
            searching for prime real estate opportunities around the world.
          </Text>
          <Text>
            Offering opportunity and value in all marketing conditions for
            nearly two decades: Today, 1mw has assisted 35+ of the largest and
            most sophisticated, local, global, public, and private lenders in
            the sale and valuation of real estate, with over 40,000+ portfolio
            valuations and 200+ sales.
          </Text>
          <Text>
            Real Estate today lives online through every touchpoint. We
            developed NONMLS.com as a single entry no-code content hub to
            discover, personalize and recommend real estate to consumers -
            across multiple channels. This allows us to uncover and amplify your
            property’s unique value, while modifying misconceptions along the
            way
          </Text>
          <Text>
            If you’re considering the sale of your real estate, or just want to
            get a sense of what your property would get on the market, we would
            love to meet!
          </Text>
          <Box>
            <Text m={0} p={0}>
              We’re just a phone call away .
            </Text>
            <Text m={0} p={0} fontWeight="bold">
              612.400.9000
            </Text>
            <Text m={0} p={0}>
              Our inbox is always ope n
            </Text>
            <Text m={0} p={0} fontWeight="bold">
              nfo@1mw.com
            </Text>
            <Text m={0} p={0}>
              Mike Wile n
            </Text>
            <Text m={0} p={0}>
              600+ Properties Sold Representing Seller
            </Text>
            <Text m={0} p={0} fontWeight="bold">
              Explore More
            </Text>
          </Box>
        </Grid>
        <Box py={8}>
          <Image
            src="./images/about/mikewilena.png"
            alt="Mike Wilen"
            width="800"
            height="950"
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default AboutUs;
