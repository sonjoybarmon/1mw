/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Container, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import {
  RiFacebookFill,
  RiInstagramFill,
  // eslint-disable-next-line prettier/prettier
  RiLinkedinFill
} from "react-icons/ri";

const Footer = () => {
  const navLinks = [
    {
      name: "ABOUT",
      path: "/about",
    },
    {
      name: "612-400-9000",
      path: "tel:+16124009000",
    },
    {
      name: "INFO@1MW.COM",
      path: "mailto:info@1mw.com",
    },]
  const footerLinks = [
    [
      {
        name: "1MW",
        href: "https://1mw.com",
        isExternal: true,
      },
      {
        name: "612-400-9000",
        href: "tel:6124009000",
        isExternal: false,
      },
      {
        name: "info@1mw.com",
        href: "mailto:info@1mw.com",
        isExternal: false,
      },
      {
        name: "1mw Strategy",
        href: "https://1mwstrategy.com",
        isExternal: true,
      },
      {
        name: "Coldwell Banker Realty",
        href: "https://ColdwellBankerRealty.com",
        isExternal: true,
      },
      {
        name: "About",
        href: "/about",
        isExternal: false,
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/mikewilenrealestate",
        icon: <RiFacebookFill color="white" />,
      },
      {
        name: "Linkdin",
        href: "https://www.linkedin.com/company/mikewilen",
        icon: <RiLinkedinFill color="white" />,
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/mikewilen",
        icon: <RiInstagramFill color="white" />,
      },
    ],
    [
      {
        name: "Wayzata MN",
        href: "https://WayzataMN.com",
        isExternal: true,
      },
      {
        name: "Chicago IL",
        href: "https://ChicagoIL.com",
        isExternal: true,
      },
      {
        name: "Privacy",
        href: "/privacy",
        isExternal: false,
      },
      {
        name: "Agency Relationships",
        href: "https://www.revisor.mn.gov/statutes/cite/82.67",
        isExternal: true,
      },
    ],
  ];

  // const socialLinks = [
  //   {
  //     name: "Facebook",
  //     href: "https://www.facebook.com/mikewilenrealestate",
  //     icon: <RiFacebookFill color="white" />,
  //   },
  //   {
  //     name: "Linkdin",
  //     href: "https://www.linkedin.com/company/mikewilen",
  //     icon: <RiLinkedinFill color="white" />,
  //   },
  //   {
  //     name: "Instagram",
  //     href: "https://www.instagram.com/mikewilen",
  //     icon: <RiInstagramFill color="white" />,
  //   },
  // ];

  return (
    // <div className="py-8 px-10">
    //   <Text fontSize="sm">
    //     {footerLinks[0].map((l) => (
    //       <CLink
    //         key={l.name}
    //         target={l.isExternal ? "_blank" : "_self"}
    //         as={Link}
    //         href={l.href}
    //         fontWeight="bold"
    //       >
    //         {l.name} |{" "}
    //       </CLink>
    //     ))}
    //     {footerLinks[1].map((l) => (
    //       <CLink
    //         key={l.name}
    //         target={l.isExternal ? "_blank" : "_self"}
    //         as={Link}
    //         href={l.href}
    //       >
    //         {l.name} |{" "}
    //       </CLink>
    //     ))}
    //     Privacy Policy Agency Relationships The data relating to real estate for
    //     sale on this web site comes in part from the Broker Reciprocity (SM)
    //     Program of the Regional Multiple Listing Service of Minnesota, Inc.
    //     Information deemed reliable but not guaranteed. Real estate listings
    //     held by brokerage firms other than Coldwell Banker are marked with the
    //     Broker Reciprocity logo or the Broker Reciprocity thumbnail logo (little
    //     black house) and detailed information about them includes the name of
    //     the listing brokers. Listing broker has attempted to offer accurate
    //     data, but buyers are advised to confirm. For the most current
    //     information, contact 1mw Coldwell Banker: 612-400-9000. Copyright 2023
    //     Regional Multiple Listing Service of Minnesota, Inc. All rights
    //     reserved. Equal Housing Opportunity. Coldwell Banker logos are
    //     trademarks of Coldwell Banker LLC. NONMLS.com, Wilen, 1MW are trademarks
    //     of MN Real Estate Inc. Licensed in MN and IL.
    //   </Text>
    // </div>
    <Stack as="footer">
      <Container pb="4" pt="8" px={{ base: 4 }} maxW="container.xl">
        <Grid flexDir="column" pb={0} display="flex" textAlign="center" >
          {" "}

          {/* {navLinks.map((link) => (
                <Link href={link.path} key={link.name} className="linkcss">
                  <CLink
                    fontSize={{ base: "20px", md: "sm", xl: "20px", "20px": "10px" }}
                    as="div"
                  >
                    {link.name}
                  </CLink>
                </Link>
              ))} */}
          
            {/* <Text fontSize="lg"  fontWeight="">Call & Text 24/7</Text>
            <Text fontSize="1.5rem" pb={2} fontWeight="bold"><Link href="tel:612-400-9000">612-400-9000</Link></Text> */}
          
          {/* <Text fontSize="lg" pb={2} fontWeight="">Our Inbox is Always Open</Text>
              <Text fontSize="1.5rem" pb={4} fontWeight="bold"><Link href="mailto:info@1mw.com">info@1mw.com</Link></Text> */}
        </Grid>
        {/* <Grid display="flex" justifyContent="space-evenly" py={6} px={10}> */}
        {/* <Link href="/"> */}
        {/* <Image
              src="./images/footer/Newonemw1.png"
              width="50"
              height="50"
              alt="A beautiful image"
            />
          </Link>
          <Link href="/">
            <Image
              src="./images/footer/Cb2.png"
              width="50"
              height="50"
              alt="A beautiful image"
            />
          </Link> */}
        {/* <Link href="https://www.instagram.com/mikewilen">
            <Image
              src="./images/footer/Insta1.png"
              width="50"
              height="50"
              alt="A beautiful image"
            />
          </Link>
          <Link href="https://www.linkedin.com/company/mikewilen">
            <Image
              src="./images/footer/Linkedin1.png"
              width="50"
              height="50"
              alt="A beautiful image"
            /> */}
        {/* </Link>
          <Link href="https://www.facebook.com/mikewilenrealestate">
            <Image
              src="./images/footer/Facebook11.png"
              width="50"
              height="50"
              alt="A beautiful image"
            />
          </Link> */}
        {/* <Link href="https://www.facebook.com/mikewilenrealestate"> */}
        {/* <Image
              src="./images/footer/Nonmlsnew.png"
              width="50"
              height="50"
              alt="A beautiful image"
            />
          </Link>
          <Link href="https://www.facebook.com/mikewilenrealestate">
            <Image
              src="./images/footer/Cbanother.png"
              width="50"
              height="50"
              alt="A beautiful image"
            />
          </Link> */}
        {/* <Link href="/">
            <Image
              src="./images/footer/google.png"
              width="50"
              height="50"
              alt="A beautiful image"
            />
          </Link> */}

        {/* <Link href="/">
            <Image
              src="./images/footer/Broker2.png"
              width="50"
              height="50"
              alt="A beautiful image"
            />
          </Link>
          <Link href="/">
            <Image
              src="./images/footer/Northmls.png"
              width="50"
              height="50"
              alt="A beautiful image"
            />
          </Link> */}
        {/* </Grid> */}
        <Grid display="flex" textAlign="justify">
          <Text fontSize="12px">
            {/* <Link href="/privacy">Privacy </Link>
            <Link href="/privacy">Terms</Link>
            {" "}
            <Link href="https://www.revisor.mn.gov/statutes/cite/82.67">
              Agency Relationships{" "}
            </Link> */}
            <Link href="mailto:info@1mw.com">info@1mw.com </Link>/<Link href="/about"> About </Link>/<Link href="https://www.linkedin.com/company/mikewilen"> Linkedin </Link>/<Link href="https://www.instagram.com/mikewilen"> Instagram </Link>/<Link href="https://www.facebook.com/mikewilenrealestate"> Facebook </Link>/<Link href="/"> 1MW Strategy </Link>/<Link href="/"> Coldwell Banker Realty</Link> /
            <Link href="/privacy"> Privacy</Link> /<Link href="/privacy"> Terms </Link>/<Link href="https://www.revisor.mn.gov/statutes/cite/82.67"> Agency Relationships </Link>/ The data relating to real estate for sale on this web site comes in part from the Broker
            Reciprocity (SM) Program of the Regional Multiple Listing Service of Minnesota, Inc.
            Information deemed reliable but not guaranteed. Real estate listings held by brokerage firms other than Coldwell
            Banker are marked with the Broker Reciprocity logo or the Broker Reciprocity thumbnail logo (little black house) and detailed information about them includes the name of the listing brokers.
            Listing broker has attempted to offer accurate data, but buyers are advised to confirm.
            on about them includes the name of the listing brokers. Listing broker has attempted to offer accurate data, but buyers are advised to confirm. For the most current information, contact 1mw Coldwell Banker: 612-400-9000. Copyright 2023
            Regional Multiple Listing Service of Minnesota, Inc. All rights reserved. Equal Housing Opportunity.
            Coldwell Banker logos are trademarks of Coldwell Banker LLC. NONMLS.com, Wilen, 1MW are trademarks of MN Real Estate Inc. Licensed in MN and IL.
          </Text>
        </Grid>
        <Grid display="flex" justifyContent="center">
          <GridItem >
            <Image
              src="/images/footer/Northstar_ Broker.png"
              width="50"
              height="50"
              alt="A beautiful image"
            />
            {/* <Image
              paddingLeft="72px"
              src="/images/footer/Broker2.png"
              width="50"
              height="50"
              alt="A beautiful image"
            /> */}

          </GridItem>
          <GridItem>
            <Text> </Text>
          </GridItem>
        </Grid>
      </Container>
    </Stack>
  );
};

export default Footer;

// import {
//   Box,
//   Container,
//   Grid,
//   GridItem,
//   HStack,
//   Link as CLink,
//   Stack,
//   Text,
//   VStack,
// } from "@chakra-ui/react";
// import Image from "next/image";
// import Link from "next/link";
// import {
//   RiFacebookFill,
//   RiInstagramFill,
//   RiLinkedinFill,
// } from "react-icons/ri";

// const Footer = () => {
//   const footerLinks = [
//     [
//       {
//         name: "612-400-9000",
//         href: "tel:6124009000",
//         isExternal: false,
//       },
//       {
//         name: "info@1mw.com",
//         href: "mailto:info@1mw.com",
//         isExternal: false,
//       },
//     ],
//     [
//       {
//         name: "About",
//         href: "/about",
//         isExternal: false,
//       },
//       {
//         name: "Wayzata MN",
//         href: "#",
//         isExternal: true,
//       },
//       {
//         name: "Chicago IL",
//         href: "#",
//         isExternal: true,
//       },
//       {
//         name: "Privacy",
//         href: "/privacy",
//         isExternal: false,
//       },
//       {
//         name: "Agency Relationships",
//         href: "https://www.revisor.mn.gov/statutes/cite/82.67",
//         isExternal: true,
//       },
//     ],
//   ];

//   const socialLinks = [
//     {
//       name: "Facebook",
//       href: "https://www.facebook.com/mikewilenrealestate",
//       icon: <RiFacebookFill color="white" />,
//     },
//     {
//       name: "Linkdin",
//       href: "https://www.linkedin.com/company/mikewilen",
//       icon: <RiLinkedinFill color="white" />,
//     },
//     {
//       name: "Instagram",
//       href: "https://www.instagram.com/mikewilen",
//       icon: <RiInstagramFill color="white" />,
//     },
//   ];

//   return (
//     <Stack as="footer" mt="8 !important">
//       <Container py="8" maxW="container.xl">
//         <Grid
//           gap="8"
//           gridTemplateColumns={{
//             base: "repeat(2,1fr)",
//             md: "repeat(4,1fr)",
//             xl: "repeat(6,1fr)",
//           }}
//         >
//           <GridItem colSpan={{ base: 2, md: 1 }}>
//             <Stack
//               w={{
//                 base: "min-content",
//                 md: "full",
//               }}
//             >
//               <Box
//                 pos="relative"
//                 height="48px"
//                 display="flex"
//                 justifyContent="center"
//                 alignItems="center"
//               >
//                 <Image
//                   src="/images/shared/BottomLogo.png"
//                   fill
//                   alt="mike wilen logo"
//                   style={{
//                     objectFit: "contain",
//                     objectPosition: "center",
//                   }}
//                 />
//               </Box>
//               <Stack direction="row" spacing="2" justifyContent="center">
//                 {socialLinks.map((l) => (
//                   <CLink
//                     key={l.name}
//                     target="_blank"
//                     as={Link}
//                     href={l.href}
//                     bg="black"
//                     p="1"
//                   >
//                     {l.icon}
//                   </CLink>
//                 ))}
//               </Stack>
//             </Stack>
//           </GridItem>

//           <GridItem colSpan={{ base: 2, md: 3, xl: 5 }}>
//             <Text fontSize="sm">
//               {footerLinks[0].map((l) => (
//                 <CLink
//                   key={l.name}
//                   target={l.isExternal ? "_blank" : "_self"}
//                   as={Link}
//                   href={l.href}
//                   fontWeight="bold"
//                 >
//                   {l.name} |{" "}
//                 </CLink>
//               ))}
//               {footerLinks[1].map((l) => (
//                 <CLink
//                   key={l.name}
//                   target={l.isExternal ? "_blank" : "_self"}
//                   as={Link}
//                   href={l.href}
//                 >
//                   {l.name} |{" "}
//                 </CLink>
//               ))}
//               The data relating to real estate for sale on this website is based
//               on information submitted to the MLS GRID as of 2022-11-18 06:45:48
//               PST. Supplied Open House Information is subject to change without
//               notice. All information should be independently reviewed and
//               verified for accuracy. Properties may or may not be listed by the
//               office/agent presenting the information. Some IDX listings have
//               been excluded from this website. By searching Northstar MLS
//               listings you agree to the Northstar MLS End User License
//               Agreement. Equal Housing Opportunity. Coldwell Banker logos are
//               trademarks of Coldwell Banker LLC. NONMLS.com, Wilen, 1MW are
//               trademarks of MN Real Estate Inc. Licensed in MN and IL.
//             </Text>
//           </GridItem>
//         </Grid>
//       </Container>
//       <VStack py="4">
//         <HStack spacing="4">
//           {socialLinks.map((link) => (
//             <CLink target="_blank" key={link.name} href={link.href}>
//               <Box fontSize="2xl">{link.icon}</Box>
//             </CLink>
//           ))}
//         </HStack>
//         <Text>© 2023, Inc. All rights reserved.</Text>
//       </VStack>
//     </Stack>
//   );
// };

// export default Footer;
