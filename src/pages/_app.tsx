/* eslint-disable react/jsx-props-no-spreading */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";

import { Chakra } from "lib/components/Chakra";
import Layout from "lib/layout";
import "lib/styles/assets/main.css";
import "lib/styles/globals.css";
// eslint-disable-next-line import/order
import defaultSEOConfig from "../../next-seo.config";

const MyApp = ({ Component, pageProps }: AppProps) => {
  // Create a client
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Chakra>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* <link rel="icon" href="/seoicon.ico" /> */}
          <meta
            name="og_image"
            property="og:image"
            content="./images/home/seoicon.ico"
          />
        </Head>
        <DefaultSeo {...defaultSEOConfig} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Chakra>
    </QueryClientProvider>
  );
};

export default MyApp;
