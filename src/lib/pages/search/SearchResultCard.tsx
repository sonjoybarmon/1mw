/* eslint-disable no-param-reassign */
import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import type { FC } from "react";

import ImageWithFallback from "lib/components/ImageWithFallback";
import { currencyChanger } from "utils/currencyChanger";

interface ISearchResultCardProps {
  property: IProperty;
}
function appendComma(text: string): string {
  if (text) {
    return `${text},`;
  }
  return text;
}
const SearchResultCard: FC<ISearchResultCardProps> = ({ property }) => {
  //   if (property.Media?.length === 0) return null;

  return (
    <Link href={`/property/${property.SlugUrl}`}>
      <Stack
        spacing="0"
        h="full"
        w="full"
        pos="relative"
        bg="gray.50"
        role="group"
      >
        <ImageWithFallback
          fallbackSrc="https://www.1mwmedia.com/default.png"
          fill
          style={{ objectFit: "cover" }}
          alt={
            property?.Media?.length < 0
              ? property?.Media[0].MediaKey
              : "Fall Back"
          }
          src={
            (property.Media[0] && property?.Media[0].MediaURL) ??
            "https://www.1mwmedia.com/default.png"
          }
        />

        <Stack pos="absolute" spacing="0">
          <Box>
            <Heading
              _groupHover={{
                bg: "blue.500",
                color: "white",
                transition: "all 0.2s ease-in-out",
              }}
              p="1"
              as="span"
              fontSize={{ base: "12px", md: "14px", lg: "14px" }}
              bg="white"
              whiteSpace="nowrap"
            >
              {property?.StreetNumber ?? ""}&nbsp;
              {property?.StreetDirPrefix ?? ""}&nbsp;
              {property?.StreetName ?? ""}&nbsp;
              {appendComma(property?.StreetSuffix) ?? ""}
              {" "}
              {property?.PostalCity ?? ""}
              {" "}
              {property?.StateOrProvince ?? ""}
              {"  "}
              {property?.PostalCode ?? ""}
            </Heading>
          </Box>
          <Box>
            <Text
              _groupHover={{
                bg: "blue.500",
                color: "white",
                transition: "all 0.2s ease-in-out",
              }}
              as="span"
              fontSize={{ base: "18px", md: "30px", lg: "30px" }}
              bg="white"
              px="1"
              py="1"
            >
              {currencyChanger(property?.ListPrice)}
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Link>
  );
};
export default SearchResultCard;
