import { Box } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import dynamic from "next/dynamic";

import { getProperties } from "lib/API/properties";

// dynamic
const PropertyGridCard = dynamic(
  () => import("lib/pages/home/PropertyGridCard"),
  {
    ssr: false,
  }
);

const Home = ({ properties }: { properties: IProperty[] }) => {
  return (
    <Box>
      <PropertyGridCard properties={properties} />
      {/* <Box bg="black">
        <Marquee>
          {properties.slice(6).map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
              variant="slim"
            />
          ))}
        </Marquee>
      </Box> */}
      <PropertyGridCard properties={properties} isReverse secondGrid />
      {/* <Box bg="white">
        <Marquee>
          {properties.slice(6, 9).map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
              variant="slim"
              dark
            />
          ))}
        </Marquee>
      </Box> */}
    </Box>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProperties<GetProperty>("homePage");

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      properties: data.data.properties,
    },
  };
};

// export const getServerSideProps: GetServerSideProps = async () => {
//   const data = await getProperties<GetProperty>();

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       properties: data.data.properties,
//     },
//   };
// };
