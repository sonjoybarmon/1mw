import type { GetStaticProps } from "next";
import Head from "next/head";

import { getProperties } from "lib/API/properties";

import Card from "./Card";
// import Image from "next/image";

// const Card = ({ property }: { property: IProperty[] }) => {
//   return (
//     <div className="w-full">
//       <Image
//         src={property?.Media?.[0]?.MediaURL}
//         alt=""
//         width={600}
//         height={400}
//         className="h-[fit-content]"
//       />
//       <div className="mt-2">
//         <span className="font-bold text-lg mr-2">{property?.ListPrice}</span>
//         {property?.StreetName}
//       </div>
//     </div>
//   )
// }

const Store = ({ properties }: { properties: IProperty[] }) => {
  // const fallBackImage = "https://www.1mwmedia.com/default.png"
  // const fallBackImage = "/images/home/fallback.jpg";
  // const properties: IProperty[] = [
  //   {
  //     _id: 1,
  //     Media: [{ MediaURL: fallBackImage }],
  //     ListPrice: "$699,000",
  //     StreetName: "11455 Mississippi River Blvd, Minneapolis MN1",
  //   },
  //   {
  //     _id: 2,
  //     Media: [{ MediaURL: fallBackImage }],
  //     ListPrice: "$699,000",
  //     StreetName: "11455 Mississippi River Blvd, Minneapolis MN2",
  //   },
  //   {
  //     _id: 3,
  //     Media: [{ MediaURL: fallBackImage }],
  //     ListPrice: "$699,000",
  //     StreetName: "11455 Mississippi River Blvd, Minneapolis MN3",
  //   },
  //   {
  //     _id: 4,
  //     Media: [{ MediaURL: fallBackImage }],
  //     ListPrice: "$699,000",
  //     StreetName: "11455 Mississippi River Blvd, Minneapolis MN4",
  //   },
  //   {
  //     _id: 5,
  //     Media: [{ MediaURL: fallBackImage }],
  //     ListPrice: "$699,000",
  //     StreetName: "11455 Mississippi River Blvd, Minneapolis MN5",
  //   },
  //   {
  //     _id: 6,
  //     Media: [{ MediaURL: fallBackImage }],
  //     ListPrice: "$699,000",
  //     StreetName: "11455 Mississippi River Blvd, Minneapolis MN6",
  //   },
  //   {
  //     _id: 7,
  //     Media: [{ MediaURL: fallBackImage }],
  //     ListPrice: "$699,000",
  //     StreetName: "11455 Mississippi River Blvd, Minneapolis MN7",
  //   },
  //   {
  //     _id: 8,
  //     Media: [{ MediaURL: fallBackImage }],
  //     ListPrice: "$699,000",
  //     StreetName: "11455 Mississippi River Blvd, Minneapolis MN8",
  //   },
  //   {
  //     _id: 9,
  //     Media: [{ MediaURL: fallBackImage }],
  //     ListPrice: "$699,000",
  //     StreetName: "11455 Mississippi River Blvd, Minneapolis MN9",
  //   },
  //   {
  //     _id: 10,
  //     Media: [{ MediaURL: fallBackImage }],
  //     ListPrice: "$699,000",
  //     StreetName: "11455 Mississippi River Blvd, Minneapolis MN10",
  //   },
  // ];

  return (
    <>
      <Head>
        <title>Mike Wilen | Real Estate</title>
        <meta name="StreetName" content="Mike Wilen Real State" />
        <link rel="icon" href="/favdeicon.png" />
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {properties?.slice(0, 9).map((property) => {
          // console.log(property);
          return <Card key={property._id} property={property} />;
        })}
      </div>
    </>
  );
};

export default Store;

export const getStaticProps: GetStaticProps = async () => {
  const data = await getProperties<GetProperty>();
  // console.log(data);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      properties: data?.data?.properties,
    },
  };
};
