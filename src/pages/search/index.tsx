/* eslint-disable prettier/prettier */
import {
  Box,
  Button,
  Center, Container,
  Flex,
  Grid,
  GridItem,
  Link,
  ListItem,
  Skeleton,
  Stack,
  Text,
  // eslint-disable-next-line prettier/prettier
  UnorderedList
} from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { searchProperties } from "lib/API/properties";
// import Paginator from "lib/components/Pagination/Pagination";
// import Pagination from "lib/components/Pagination/Pagination-v2";
import useSearchStore from "lib/hooks/useSearchStore";
import SearchResultCard from "lib/pages/search/SearchResultCard";

const pageLimit = 18;
const Search = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { search, sortOrder, setSortOrder, page, setPage } = useSearchStore(
    (state) => state
  );
  const { data, isFetching } = useQuery<GetProperty>(
    ["properties", search, sortOrder, page, pageLimit],
    () => {
      return searchProperties({
        searchText: search,
        sortOrder: -1,
        sortField: "ModificationTimestamp",
        page,
        limit: pageLimit,
      });
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  let pagesCounts = 0;
  if (data) {
    pagesCounts = data.data.totalProperty;
  }
  // const isCurrentPageFirst = page === 1;
  const pagesCount = Math.ceil(pagesCounts / pageLimit);
  // const isCurrentPageLast = page === pagesCount;
  // const isPaginationShown = pagesCount > 1;

  // const setLastPageAsCurrent = () => {
  //   if (page > pagesCount) {
  //     setPage(pagesCount);
  //   }
  // };

  const changePage = (number: number) => {
    if (page === number) return;
    setPage(number);
  };
  const onPageNumberClick = (pageNumber: number) => {
    changePage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onPreviousPageClick = () => {
    const calculatedPage = page - 1;
    changePage(calculatedPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onNextPageClick = () => {
    const calculatedPage = page + 1;
    changePage(calculatedPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let isPageNumberOutOfRange = false;
  const pageNumbers = [...new Array(pagesCount)].map((_, index) => {
    const pageNumber = index + 1;
    const isPageNumberFirst = pageNumber === 1;
    const isPageNumberLast = pageNumber === pagesCount;
    const isCurrentPageWithinTwoPageNumbers = Math.abs(pageNumber - page) <= 2;

    if (
      isPageNumberFirst ||
      isPageNumberLast ||
      isCurrentPageWithinTwoPageNumbers
    ) {
      isPageNumberOutOfRange = false;
      return (
        <Button
          bg="none"
          // _hover={{
          //   // width: "20px",
          //   borderRadius: "1px",
          //   // background: "gray"
          // }}
          className={`page-item ${
            pageNumber === page ? "active" : ""
          } d-sm-block forover`}
          aria-current="page"
          key={pageNumber}
          onClick={() => onPageNumberClick(pageNumber)}
        >
          <a className="page-link">{pageNumber}</a>
        </Button>
      );
    }

    if (!isPageNumberOutOfRange) {
      isPageNumberOutOfRange = true;
      return (
        <Button
          bg="none"
          className="page-item d-none d-sm-block muted"
          key={pageNumber}
          onClick={() => onPageNumberClick(pageNumber)}
        >
          ...
        </Button>
      );
    }
    return null;
  });

  // const [buttonText, setButtonText] = useState("Default");

  // const buttonTextHandler = (value: number, text: string) => {
  //   setButtonText(text);
  //   setSortOrder(value);
  // };

  return (
    <Stack>
      <Container maxW="container.xxl">
        <Flex>
          <Container w="100%" maxW="container.xxl" mt="4">
            {isFetching ? (
              <Grid
                gridTemplateColumns={{
                  base: "repeat(1,1fr)",
                  lg: "repeat(3,1fr)",
                }}
                gap="4"
              >
                {new Array(10).fill("").map(() => (
                  <GridItem
                    boxShadow="md"
                    overflow="hidden"
                    h={{ base: "400px", md: "500px" }}
                    w={{ base: "full", md: "full" }}
                  >
                    <Skeleton
                      h={{ base: "400px", md: "500px" }}
                      w={{ base: "full", md: "full" }}
                    />
                  </GridItem>
                ))}
              </Grid>
            ) : (
              <Box>
                {!data?.data?.properties ? (
                  <Center>
                    <Text>
                      There are no property that match{" "}
                      <b>&quot;{search}&quot;</b>
                    </Text>
                  </Center>
                ) : (
                  <Box>
                    <Grid display="flex">
                      <Text fontSize="14px">
                        Showing {data?.data?.totalProperty} results for{" "}
                        <b>
                          &quot;
                          {search}&quot;
                        </b>
                      </Text>
                      <Stack
                        flex="1"
                        spacing={0}
                        minW="200px"
                        display={{ base: "none", lg: "flex" }}
                        pb={4}
                      >
                        {/* <Text
                        onClick={() => buttonTextHandler(0, "Default")}
                        fontSize="2xl"
                        fontWeight="bold"
                      >
                        Relevence
                      </Text> */}
                        {/* <Box display="flex" pl={10} ml={8}>
                        <Text
                            pl={7}
                            cursor="pointer"
                            textDecor={buttonText === "lth" ? "underline" : ""}
                            onClick={() => buttonTextHandler(1, "lth")}
                            fontSize="14px"
                          >
                            Sort By Price:
                          </Text>

                          <Text
                            pl={2}
                            cursor="pointer"
                            textDecor={buttonText === "lth" ? "underline" : ""}
                            onClick={() => buttonTextHandler(1, "lth")}
                            fontSize="14px"
                          >
                            Low-High
                          </Text>
                          <Text
                            pl={3}
                            cursor="pointer"
                            textDecor={buttonText === "htl" ? "underline" : ""}
                            onClick={() => buttonTextHandler(-1, "htl")}
                            fontSize="14px"
                          >
                            High-Low
                          </Text>
                        </Box> */}
                      </Stack>
                    </Grid>
                    <Grid
                      gridTemplateColumns={{
                        base: "repeat(1,1fr)",
                        lg: "repeat(3,1fr)",
                      }}
                      gap="4"
                      w="full"
                    >
                      {data?.data?.properties?.map((property) => (
                        <GridItem
                          boxShadow="md"
                          overflow="hidden"
                          h={{ base: "500px", md: "500px" }}
                        >
                          <SearchResultCard
                            key={property._id}
                            property={property}
                          />
                        </GridItem>
                      ))}
                    </Grid>
                  </Box>
                )}
              </Box>
            )}
          </Container>
          {/* <Stack
            flex="1"
            spacing={0}
            minW="200px"
            display={{ base: "none", lg: "flex" }}
          >
            <Text
              onClick={() => buttonTextHandler(0, "Default")}
              fontSize="2xl"
              fontWeight="bold"
            >
              Relevence
            </Text>
            <Text
              cursor="pointer"
              textDecor={buttonText === "lth" ? "underline" : ""}
              onClick={() => buttonTextHandler(1, "lth")}
              fontSize="lg"
            >
              Price: Low to high
            </Text>
            <Text
              cursor="pointer"
              textDecor={buttonText === "htl" ? "underline" : ""}
              onClick={() => buttonTextHandler(-1, "htl")}
              fontSize="lg"
            >
              Price: High to low
            </Text>
          </Stack> */}
        </Flex>
        {data?.data && data.data.totalProperty && (
          <Flex className="mt-2 mb-4 pagination-section pt-4">
            <UnorderedList
              className="pagination"
              style={{ listStyleType: "none" }}
            >
              <ListItem className="page-item" onClick={onPreviousPageClick}>
                <Link className="page-link" aria-label="Previous">
                  <Button
                  color="gray"
                  // color="#4299E1"
                    bg="white"
                    className="btn-primaryBtn forHover"
                  >
                    {"<"}
                  </Button>
                </Link>
              </ListItem>
              <Text
                bg="none"
                colorScheme="none"
                className="mt"
                fontSize="md"
                color="gray"
                _hover={{
                  // width: "20px",
                  borderRadius: "1px",
                  background: "white",
                  color: "none"
                }}
                // color="#4299E1"
              >
                {pageNumbers}
              </Text>
              {/* {pageNumbers} */}
              <ListItem className="page-item" onClick={onNextPageClick}>
                <Link className="page-link" aria-label="Next">
                  <Button
                    padding={0}
                    color="gray"
                    // color="#4299E1"
                    bg="white"
                    className="btn btn-primary btn-primaryBtn forHover"
                  >
                    {">"}
                  </Button>
                </Link>
              </ListItem>
            </UnorderedList>
          </Flex>
        )}
      </Container>
    </Stack>
  );
};

export default Search;
