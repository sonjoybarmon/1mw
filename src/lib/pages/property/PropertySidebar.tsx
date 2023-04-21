/* eslint-disable prettier/prettier */
import { Box, Flex, Stack, Text } from "@chakra-ui/react";

import ContactForm from "lib/components/ContactForm/ContactForm";
import type { FC } from "react";

import { currencyChanger } from "utils/currencyChanger";

interface IPropertySidebarProps {
  property: IProperty;
}

function appendComma(text: string): string {
  if (text) {
    return `${text},`;
  }
  return text;
}
const PropertySidebar: FC<IPropertySidebarProps> = ({ property }) => {
  const propertyDetails = [
    {
      name: "Total Finished SqFt",
      value: parseInt(property.NST_SqFtTotal, 10).toLocaleString("en-US") || "",
    },
    { name: "Bed", value: property.BedroomsTotal },
    { name: "Bath", value: property.BathroomsTotalInteger },
    { name: "Lot Size Acres", value: property.LotSizeArea },
    { name: "Year Built", value: property.YearBuilt },
    // { name: "Basement", value: property.Basement.toSting() },
  ];

  // console.log(property, "property")
  // console.log(detai, "property")
  return (
    <Stack p="4" w="full" flex="1" spacing="0" pt={0} whiteSpace="break-spaces" className='right_slider_part' >
      <Text fontSize="40px" mt="-13px" fontWeight="medium">
        {currencyChanger(property.ListPrice)}
      </Text>
      <Flex fontSize="sm">
        <Text fontSize="14px" fontWeight="" backgroundColor="white">
          {property?.StreetNumber ?? ""}&nbsp;
          {property?.StreetDirPrefix ?? ""}&nbsp;
          {property?.StreetName ?? ""}&nbsp;
          {appendComma(property?.StreetSuffix) ?? ""}{" "}
          {property?.PostalCity ?? ""} {property?.StateOrProvince ?? ""}
          {"  "}
          {property?.PostalCode ?? ""}
        </Text>
      </Flex>
      <Stack spacing="0">
        <Flex justify="space-between" display="block">
          <Text fontSize="14px">Status: {property.StandardStatus}</Text>
        </Flex>
      </Stack>
      <Stack spacing="0">
        <Flex justify="space-between" display="block">
          <Text fontSize="14">Style: {property.PropertySubType}</Text>
        </Flex>
      </Stack>
      {/* <Divider my="2 !important" /> */}
      {/* <Stack pt="1" display="block" flexDirection="row" alignItems="end" textAlign="justify"> */}
      {propertyDetails.map((detail) => (
        <Stack spacing="0" key={detail.name}>
          <Flex justify="space-between" display="block">
            <Text fontWeight="" fontSize="14">
              {detail.name}: {detail.value}
            </Text>

            {/* <Text fontSize="md">{detail.value}</Text> */}
          </Flex>
          {/* <Divider my="2 !important" /> */}
        </Stack>
      ))}
      {/* </Stack> */}
      <Stack spacing="0" key="Garage">
        <Flex justify="space-between" display="block">
          <Text fontSize="14">Basement: {property.Basement[0]}</Text>
        </Flex>
      </Stack>
      <Stack spacing="0" key="Garage">
        <Flex justify="space-between" display="block">
          <Text fontSize="14">Garage Spaces: {property.GarageSpaces}</Text>
        </Flex>
      </Stack>

      <Stack spacing="0" key="School District">
        <Flex justify="space-between" display="block">
          <Text fontSize="14">
            School District: {property.HighSchoolDistrict}
          </Text>
        </Flex>
      </Stack>
      <Stack spacing="0" key="Taxes">
        <Flex justify="space-between" display="block">
          <Text fontSize="14">
            Yearly Taxes: ${property.TaxAnnualAmount.toLocaleString("en-US")}
          </Text>
        </Flex>
      </Stack>
      <Stack spacing="0" key="County">
        <Flex justify="space-between" display="block">
          <Text fontSize="14">County: {property.CountyOrParish}</Text>
        </Flex>
      </Stack>
      <Stack spacing="0" key="HVAC">
        <Flex justify="space-between" display="block">
          <Text fontSize="14">HVAC: {property.Cooling}</Text>
        </Flex>
      </Stack>
      <Stack spacing="0" key="Waterfront">
        <Flex justify="space-between" display="block">
          <Text fontSize="14">
            Waterfront: {property.WaterfrontYN ? "Yes" : "No"}
          </Text>
        </Flex>
      </Stack>
      <Stack spacing="0" key="Listed by">
        <Flex justify="space-between" display="block">
          <Text fontSize="14">Listed by: {property.ListOfficeName} </Text>
        </Flex>
      </Stack>
      {/* <Text display="flex" textAlign="justify" fontSize={{ base: "14px", xl: "14px" }}>{property?.PublicRemarks}</Text> */}
      <Box>
        {/* <Button
          as={Link}
          href="tel:+16124009000"
          mt="4"
          w="full"
          border="1px"
          bg="white"
          // fontSize={{ base: "sm", md: "sm", xl: "sm", "2xl": "md" }}
          fontSize="14px"
          _hover={{ bg: "white", opacity: "0.8" }}
          borderRadius="none"
          color="black"
          size="lg"
        >
          <center>
            Call & Text Lines Are Open <br /> <b>612-400-9000</b>
          </center>
        </Button>
        <Button
          as={Link}
          href="mailto:info@1mw.com"
          mt="4"
          w="full"
          border="1px"
          bg="white"
          // fontSize={{ base: "sm", md: "sm", xl: "sm", "2xl": "md" }}
          fontSize="14px"
          _hover={{ bg: "white", opacity: "0.8" }}
          borderRadius="none"
          color="black"
          size="lg"
        >
          <center>
            Our Inbox is Always Open <br /> <b>info@1mw.com</b>
          </center>
        </Button> */}
        <ContactForm
          propertyAddress={`${property.StreetNumber} ${property.StreetName} ${property.PostalCity} ${property.StateOrProvince} ${property.PostalCode}`}
        />
      </Box>
    </Stack>
  );
};
export default PropertySidebar;
