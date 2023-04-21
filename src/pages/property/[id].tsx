/* eslint-disable prettier/prettier */
import { Box, Container, Flex, Stack } from "@chakra-ui/react";
import "keen-slider/keen-slider.min.css";
import { getProperties, getPropertyById } from "lib/API/properties";
import PropertySlider from "lib/components/PropertySlider";
import PropertySidebar from "lib/pages/property/PropertySidebar";
import type { GetServerSideProps } from "next";
import Head from "next/head";

const EachProperty = ({
  property,
}: // properties,
{
  property: IProperty;
  // properties: IProperty[];
}) => {
  // function appendComma(text: string): string {
  //   if (text) {
  //     return `${text},`;
  //   }
  //   return text;
  // }

  // console.log(property.Media[0].MediaURL, "property");
  const dataImageurl = property.Media[0].MediaURL;
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content="1MW: Real Estate and Homes For Sale"
        />
        <meta
          property="og:description"
          content="Limited Edition Real Estate and Homes For Sale. List Your Property Today. Minnesota Licensed Real Estate Agents. National and Global Real Estate Marketing. Delivering Exceptional Real Estate Experiences. 1mw and nonmls are single entry, no code content hubs for displaying and personalizing real estate listings."
        />
        <meta name="og_image" property="og:image" content={dataImageurl} />
        <meta property="og:url" content="https://mikewilen.com" />
        <meta name="twitter:card" content="app" />
        <meta name="twitter:app:country" content="1mw" />
        <meta
          name="twitter:app:url:googleplay"
          content="https://mikewilen.com/"
        />
        <meta property="og:type" content="website" />
        <meta
          name="og_site_name"
          property="og:site_name"
          content="mikewilen.com"
        />
        <meta
          name="facebook:title"
          content="1MW: Real Estate and Homes For Sale"
        />
        <meta
          name="facebook:description"
          content="Limited Edition Real Estate and Homes For Sale. List Your Property Today. Minnesota Licensed Real Estate Agents. National and Global Real Estate Marketing. Delivering Exceptional Real Estate Experiences. 1mw and nonmls are single entry, no code content hubs for displaying and personalizing real estate listings."
        />
        <meta name="facebook:image" content={dataImageurl} />
        <meta name="facebook:image:alt" content="Property Image" />
        <meta
          name="twitter:title"
          content="1MW: Real Estate and Homes For Sale"
        />
        <meta
          name="twitter:description"
          content="Limited Edition Real Estate and Homes For Sale. List Your Property Today. Minnesota Licensed Real Estate Agents. National and Global Real Estate Marketing. Delivering Exceptional Real Estate Experiences. 1mw and nonmls are single entry, no code content hubs for displaying and personalizing real estate listings."
        />
        <meta name="twitter:image" content={dataImageurl} />
        <meta name="twitter:image:alt" content="Property Image" />
      </Head>
      <Box>
        <Container p={0} maxW="container.xxl">
          <Flex gap="2" flexDir={{ base: "column", lg: "row" }}>
            <Box pos="relative" w={{ lg: "65%" }} className="left_single_part">
              <Stack pos="absolute" zIndex="8" spacing="1">
                <Box fontSize="2xl" fontWeight="medium" backgroundColor="white">
                  {/* {property?.StreetNumber ?? ""}&nbsp;
                {property?.StreetName ?? ""}
                {property?.StreetNumberNumeric ?? ""}
                {", "}
                {property?.PostalCity ?? ""}
                {", "}
                {property?.StateOrProvince ?? ""}
                {" - "}
                {property?.PostalCode ?? ""} */}
                </Box>
                <Box>
                  {/* <Text
                  as="span"
                  fontSize="md"
                  bg="white"
                  px="4"
                  py="4"
                  lineHeight="2rem"
                  fontWeight="bold"
                >
                  {currencyChanger(property?.ListPrice)}
                  USD
                </Text> */}
                </Box>
              </Stack>
              <PropertySlider media={property?.Media ?? []} />
            </Box>
            <Box className="right_single_part">
              <PropertySidebar property={property} />
            </Box>
          </Flex>
          {/* <Stack py="8">
            <Heading fontSize="xl" pl={10}>
            </Heading>
            <Grid
              textAlign="center"
              gridTemplateColumns={{
                base: "repeat(1,minmax(0,1fr))",
                md: "repeat(2,minmax(0,1fr))",
                lg: "repeat(4,minmax(0,1fr))",
              }}
              gap="4"
            >
              {properties.slice(0, 4).map((item) => (
                <GridItem key={item._id}>
                  <Box
                    cursor="pointer"
                    minW="100%"
                    h={{
                      base: "12rem",
                      md: "14rem",
                      lg: "18.75rem",
                    }}
                    key={item.ListingId}
                  >
                    <PropertyCard
                      hideDetails={false}
                      property={item}
                      variant="slim"
                    />
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Stack> */}
        </Container>
      </Box>
    </>
  );
};

export default EachProperty;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;

  const data = await getPropertyById<GetPropertyById>({ id });
  // console.log("data ==============", data);
  const properties = await getProperties<GetProperty>();

  // console.log(data);

  if ((data as unknown as string) === "Server Error") {
    return {
      // notFound: true,
      redirect: {
        destination: "/404",
        permanent: false,
      },
    };
  }

  if (!data || !properties) {
    return {
      notFound: true,
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {
      property: data.data.propertyDetail,
      properties: properties.data.properties,
    },
  };
};
