import type { GetStaticProps } from "next";
import Head from "next/head";

import { getProperties } from "lib/API/properties";
import Card from "lib/pages/store/Card";

const Store = ({ properties }: { properties: IProperty[] }) => {
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
