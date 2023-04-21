import { Box, Grid, GridItem, useBreakpoint } from "@chakra-ui/react";
import type { FC } from "react";

import PropertyCard from "./PropertyCard/PropertyCard";

interface IPropertyGridCardProps {
  properties: IProperty[];
  isReverse?: boolean;
  secondGrid?: true;
}

const PropertyGridCard: FC<IPropertyGridCardProps> = ({
  properties,
  isReverse = false,
  secondGrid,
}) => {
  // select 3 random properties
  // const randomProperties = properties
  //   // .sort(() => 0.5 - Math.random())
  //   .slice(0, 3);

  const breakpoint = useBreakpoint();
  const startIndex = secondGrid ? 3 : 0;
  const endIndex = secondGrid ? 6 : 3;

  // if (randomProperties.length < 3) return null;

  return (
    <Box
      px={{
        base: 0,
        // md: 16,
      }}
    >
      <Grid
        templateRows="repeat(2, 1fr)"
        h="full"
        templateColumns="repeat(3, 1fr)"
      >
        {/* eslint-disable-next-line sonarjs/cognitive-complexity */}
        {properties.slice(startIndex, endIndex).map((property, i: number) => {
          return (
            <GridItem
              rowSpan={{
                base: 1,
                md: !isReverse ? (i === 0 ? 2 : 1) : i === 1 ? 2 : 1,
              }}
              colSpan={{
                base: 3,
                md: !isReverse ? (i === 0 ? 2 : 1) : i === 1 ? 2 : 1,
              }}
              key={property._id}
            >
              <PropertyCard
                key={property._id}
                property={property}
                imgProps={{
                  priority: true,
                  alt: property?.StreetName,
                  fill: true,
                  width:
                    breakpoint === "base"
                      ? 540
                      : i === (isReverse ? 1 : 0)
                      ? 1080
                      : 540,
                  height:
                    breakpoint === "base"
                      ? 540
                      : i === (isReverse ? 1 : 0)
                      ? 1080
                      : 540,
                  style: {
                    objectFit: "cover",
                  },
                }}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};
export default PropertyGridCard;
