/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */
import { Flex, Input, InputGroup, InputRightElement } from "@chakra-ui/react";

import useSearchStore from "lib/hooks/useSearchStore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";

const SearchInput = () => {
  const router = useRouter();
  const isSearchPage = router.pathname === "/search";
  const { search, setSearch, setSortOrder } = useSearchStore((state) => state);
  const [searchValue, setSearchValue] = useState(search);
  // const debouncedSearch = useDebounce(search, 500);

  // useQuery<GetProperty>(
  //   ["properties", search, sortOrder],
  //   () =>
  //     searchProperties({
  //       searchText: debouncedSearch,
  //       sortOrder,
  //       sortField: "ListPrice",
  //     }),
  //   {
  //     enabled: debouncedSearch.length > 0,
  //   }
  // );

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const onClick = () => {
    if (!isSearchPage) {
      router.push(`/search`);
    }
    setSearch(searchValue);
  };
  useEffect(() => {
    if (!isSearchPage) {
      setSearch("");
    }
  }, [router.pathname, isSearchPage, setSearch]);

  // const handleKeyDown = (event: any) => {
  //   if (event.key === "Enter") {
  //     onClick();
  //   }
  // };

  return (
    <Flex style={{ width: "460px" }} flexDir={{ base: "column", sm: "row" }}>
      <Flex w="full" justifyContent="center" alignItems="center">
        <form
          className="searchinput"
          onSubmit={(e) => {
            e.preventDefault();
            onClick();
          }}
        >
          <InputGroup size="md">
            <Input
              value={searchValue}
              onChange={(e) => searchHandler(e)}
              borderRadius="none"
              size="md"
              fontSize="14px"
              placeholder="Search By: Address, City, ZIP, MLS#"
            />
            <InputRightElement cursor="pointer" onClick={onClick}>
              <HiSearch size="1.4rem" />
            </InputRightElement>
          </InputGroup>
        </form>
      </Flex>
      {isSearchPage && (
        <Flex
          justify="end"
          marginTop="2"
          display={{ base: "flex", lg: "none" }}
        >
          {/* <SortButton setButtonValue={setSortOrder} /> */}
        </Flex>
      )}
    </Flex>
  );
};
export default SearchInput;
