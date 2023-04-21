/* eslint-disable react/jsx-no-bind */
import {
  Box,
  Button,
  Link as CLink,
  Center,
  Container,
  Image,
  Input,
  Link,
  Stack,
  // eslint-disable-next-line prettier/prettier
  Text,
  // eslint-disable-next-line prettier/prettier
  useToast
} from "@chakra-ui/react";
import axios from "axios";
import Head from "next/head";
import type { SetStateAction } from "react";
import { useState } from "react";
import { HiExternalLink } from "react-icons/hi";
import TextAnimation from "lib/components/TextAnimation";

const About = () => {
  const [emailMsg, setEmailMsg] = useState("");
  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [addMsg, setAddMsg] = useState(
    "I would like to receive a  value estimate about this address "
  );
  const [address, setAddress] = useState("");
  const [addressCheck, setAddressCheck] = useState("");
  const [error, setError] = useState("");
  const handleEmailChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setEmailMsg(e.target.value);
    setError("");
  };
  const handleAddChange = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setAddress(e.target.value);
    setAddressCheck("");
    // console.log(setAddress(e.target.value))
  };
  // function validateEmail(email) {
  //   const regex = /\S+@\S+\.\S+/;
  //   return regex.test(email);
  // }
  const items = [
    { type: "video", id: "2", src: "/videos/about/about2.mp4" },
    { type: "video", id: "1", src: "/videos/about/about1.mp4" },
    { type: "video", id: "4", src: "/videos/about/about3.mp4" },
    { type: "video", id: "3", src: "/videos/about/about4.mp4" },
    // { type: "video", id: "5", src: "/videos/about/domain.mp4" },
    // { type: "photo", id: "6", src: "/images/about/mike_wilen.png" },
  ];
  const newsLinks = [
    {
      text: "Fox News – Super Bowl Rental",
      url: "https://www.fox9.com/news/look-inside-luxurious-rental-homes-for-the-super-bowl",
    },
    {
      text: "Minneapolis St. Paul Business Journal – Orono Listed at $2.6M",
      url: "https://www.bizjournals.com/twincities/news/2021/11/02/orono-wedding-chapel-on-sale-for-2-6-million.html",
    },
    {
      text: " Star Tribune – Minnesota Home Sales",
      url: "http://startribune.com/twin-cities-home-sales-continue-to-inch-lower-even-as-rates-fall/282507321/",
    },
    {
      text: "USA Today – St. Cloud Times – Historic Victorian",
      url: "http://sctimes.com/story/life/2021/08/14/big-lake-minnesota-real-estate-housing-mississippi-river-mansion-coldwell-banker-realty/5454075001/",
    },
    {
      text: "  Star Tribune – Queen Anne Mansion",
      url: "https://www.startribune.com/historic-victorian-mansion-in-st-cloud-goes-on-market/600080718/#1",
    },
  ];

  const socialLinks = [
    {
      text: "Instagram",
      url: "https://www.instagram.com/mikewilen",
    },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/company/mikewilen",
    },
  ];
  const toast = useToast();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  const onFormsSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (address === "") {
      setAddressCheck("Please enter your address");
      return;
    }
    if (emailMsg === "") {
      setError("Please enter your email");
      return;
    }
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { data } = await axios.post(
        `${API_URL}/submitData/formDetails?authKey=${API_KEY}&inputEmail=${emailMsg}&inputMessage=${addMsg}${address}&userName=${userName}&userPhone=${userPhone}&page=AboutUs`,
        {
          emailMsg,
          address,
          userName,
          userPhone,
        }
      );

      toast({
        title: `Email sent`,
        status: "success",
        isClosable: true,
      });
      // eslint-disable-next-line @typescript-eslint/no-shadow
    } catch (error) {
      // console.error(error);
    }
    setEmailMsg("");
    setAddress("");
    setError("");
    setAddressCheck("");
    setUserPhone("");
    setUserPhone("");
    // setAddressCheck(false);
    // setInputMessage("");
  };
  const sanitizeName = (input: string): string => {
    return input.replace(/[0-9]/g, "");
  };

  function handleNameChange(e: { target: { value: string } }) {
    const input = e.target.value;
    const cleanedInput = sanitizeName(input);
    setUserName(cleanedInput);
  }

  const sanitizePhoneNumber = (input: string): string => {
    return input.replace(/\D/g, "");
  };
  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const numericInput = sanitizePhoneNumber(input);
    setUserPhone(numericInput);
  };

  return (
    <>
      <Head>
        <title>About | Real Estate</title>
        <meta name="description" content="Mike Wilen Real State" />
        <link rel="icon" href="/favdeicon.png" />
      </Head>
      <Box alignItems="center">
        <Container
          maxW="container.xl"
          fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}
        >
          <Stack my="16" mt="8" spacing={4}>
            <Text as="b" fontSize="3xl" mb="4">
              How much is my house worth?
            </Text>

            <Text fontSize="xl" mb="4">
              Use this home value estimator to get a free, instant home-value
              estimate.
            </Text>
            <form onSubmit={onFormsSubmit}>
              <Input
                placeholder="Your Name"
                type="text"
                size="sm"
                mb="4"
                onChange={handleNameChange}
                value={userName}
              />
              <Input
                placeholder="Your Phone"
                type="tel"
                size="sm"
                mb="4"
                maxLength={10}
                onChange={handlePhoneChange}
                value={userPhone}
              />
              <Input
                type="text"
                placeholder="Your property address*"
                size="sm"
                mb="4"
                onChange={handleAddChange}
                value={address}
              />
              {addressCheck && (
                <Text fontSize="14px" mb={2} mt={-3} style={{ color: "red" }}>
                  {addressCheck}
                </Text>
              )}
              <Input
                placeholder="Your email address*"
                type="email"
                size="sm"
                mb="4"
                onChange={handleEmailChange}
                value={emailMsg}
              />
              {error && (
                <Text fontSize="14px" mt={-3} style={{ color: "red" }}>
                  {error}
                </Text>
              )}
              <Box>
                <Button
                  // disabled={!validateEmail(emailMsg)}
                  type="submit"
                  colorScheme="blue"
                  variant="solid"
                  borderRadius="8px"
                  color="#ffffff"
                  bg="#0642AB"
                  px="12"
                >
                  Submit
                </Button>
              </Box>
            </form>
          </Stack>
          <Image src='/MikeWilenAboutPageImage.png' alt='Mike Wilen' />
        </Container>

        {/* <Box pos="relative"> */}
        <Center>
          {/* <ReactPlayer
            url="/videos/about/about_new.mp4"
            light="/images/about/mike.jpg"
          /> */}
          {/* <Box
            as="video"
            controls
            src="/videos/about/about_new.mp4"
            poster="/public/images/mike.jpg"
            alt="Mike Wilen"
            objectFit="contain"
            sx={{
              aspectRatio: "16/9",
            }}
          /> */}
          
          {/* <Box
            as="video"
            controls
            maxW={{
              sm: "container.sm",
              md: "container.md",
              xl: "container.xl",
            }}
            padding={{ md: 4 }}
            style={{
              // maxWidth: "50%",
              // height: "50%",
              // width: "50%",
              // margin: "0 auto",
              border: "none",
              objectFit: "cover",
            }}
            playsInline
            src="/videos/about/Mike_Wilen_Welcome_About.mp4"
            poster="/images/about/video_cover_thumbnail.png"
          /> */}
        </Center>

        <Box my="8" padding={{ base: 4 }}>
          <Center>
            <Text
              fontSize="4xl"
              as="b"
              style={{ fontStretch: "ultra-expanded" }}
              align="center"
            >
              Advanced Real Estate Marketing
            </Text>
          </Center>
        </Box>

        {/* </Box> */}
        <Container
          maxW="container.xl"
          fontSize={{ base: "sm", md: "md", xl: "lg", "2xl": "xl" }}
        >
          <Stack my="16" mt="8" spacing={4}>
            <Text style={{ textAlign: "justify" }}>
              It&apos;s more than what you do; it&apos;s how you do it. Across
              property types and markets, in conference rooms and dining rooms,
              we measure our success by yours. And in our interactions, we
              commit to making your real estate experience as satisfying as the
              outcomes we help you achieve. Our greatest accomplishment is
              ensuring that you never have to choose between premier
              representation and exceptional service. So, tell us. What do you
              want to achieve?
            </Text>
          </Stack>

          <Box my="8">
            <TextAnimation />
          </Box>

          <Stack mt="8" spacing={4}>
            {/* <Text style={{ textAlign: "center" }}>
                We purposefully transcend channels to make work that lands and
                lasts. Our capabilities include orchestrating innovative
                touchpoints to deliver unrivaled real estate marketing.
              </Text> */}

            <Text style={{ textAlign: "justify" }}>
              Real Estate today lives online - introduced to consumers at
              multiple touchpoints. We built NONMLS as a single entry no-code
              content hub to discover, personalize and recommend real estate to
              consumers – across multiple channels. This allows us to uncover
              and clarify your property&apos;s unique value, while modifying
              misconceptions along the way.
            </Text>

            {/* <Text style={{ textAlign: "center" }}>
                If you&apos;re considering the sale of your real estate, or just
                want to get a sense of what your home would get on the love to
                meet!
              </Text> */}

            <Text style={{ textAlign: "justify" }}>
              Our capabilities include orchestrating innovative solutions to
              deliver unrivaled real estate services. Today, we've assisted 30+
              of the largest and most sophisticated local, global, public, and
              private lenders in the sale of 200+ properties and 10,000+
              portfolio valuations. Clients include: Nationstar, Huntington,
              Bank of America, Goldman Sachs, Minnesota Housing, Citi, Beal
              Bank, US Bank, HUD, Carrington, J.P. Morgan Chase, M&T Bank,
              Compeer and the USDA.
            </Text>

            <Text style={{ textAlign: "justify" }}>
              Mike Wilen is a national real estate agent who practices in the
              areas of residential and commercial real estate sales, portfolio
              analysis, OREO, foreclosure, and relocation. Had the
              Minnesota-born Wilen chosen a profession other than real estate in
              which to make his name, it surely would have been in the world of
              tech. The MN native began his real estate career as a receptionist
              where he was promoted to sales agent. Shortly after he was #2 in
              listings sold, and one of the top selling individual agents in
              Minnesota.
            </Text>
            <Stack spacing="0">
              <Text style={{ textAlign: "left" }}>
                Mike Wilen <br />
                Real Estate Agent <br />
                {socialLinks.map((link) => (
                  <Box key={link.text}>
                    <CLink
                      as={Link}
                      target="_blank"
                      href={link.url}
                      rel="noopener noreferrer"
                      isExternal
                      style={{
                        alignItems: "center",
                        display: "flex",
                      }}
                    >
                      {link.text}
                      <HiExternalLink
                        style={{
                          display: "inline",
                          marginLeft: "4px",
                        }}
                      />
                    </CLink>
                  </Box>
                ))}
                600+ Properties Sold Representing Seller <br />
                Coldwell Banker Global Luxury
                <br />
              </Text>
              {newsLinks.map((link) => (
                <Box key={link.text}>
                  <CLink
                    as={Link}
                    target="_blank"
                    href={link.url}
                    rel="noopener noreferrer"
                    isExternal
                    style={{
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    {link.text}
                    <HiExternalLink
                      style={{
                        display: "inline",
                        marginLeft: "4px",
                      }}
                    />
                  </CLink>
                </Box>
              ))}
            </Stack>
            <Text style={{ textAlign: "justify" }}>
              If you're considering the sale of your real estate, or just want
              to get a sense of what your property would get on the market, we
              would love to meet! Call & Text us 24/7 at
              <Link href="tel:612-400-9000" fontWeight="bold">
                {" "}
                612-400-9000
              </Link>
              . Our inbox is always open:{" "}
              <Link href="mailto:info@1mw.com" fontWeight="bold">
                info@1mw.com.
              </Link>
            </Text>
            {/* <Text fontSize="lg" pb={2} fontWeight="">
              Call & Text 24/7
            </Text>
            <Text fontSize="1.5rem" pb={4} fontWeight="bold">
              <Link href="tel:612-400-9000">612-400-9000</Link>
            </Text> */}
            {/* <Center mt="1px" marginTop="opx">
              <Text fontSize="lg" mt={0} mb={0} fontWeight="">
                Our Inbox is Always Open
              </Text>
            </Center>
            <Center>
              <Text fontSize="1.5rem" fontWeight="bold" mt="-16px">
                <Link href="mailto:info@1mw.com">info@1mw.com</Link>
              </Text>
            </Center> */}
            {/* <Text my="4">
      If you’re considering the sale of your real estate, or just want
      to get a sense of what your home would get on the market, we would
      love to meet!
    </Text> */}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default About;
