/* eslint-disable sonarjs/no-nested-template-literals */
import axios from "axios";

// const API_URL = "http://1mwmedia.com:5000";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
export const getProperties = async <T>(
  pageName?: string
): Promise<T | void> => {
  try {
    const { data } = await axios.get<T>(
      `${API_URL}/properties?authKey=${API_KEY}&${
        pageName ? `pageSource=${pageName}` : ""
      }`
    );
    console.log(
      `${API_URL}/properties?authKey=${API_KEY}&${
        pageName ? `pageSource=${pageName}` : ""
      }`,
      "test"
    );
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error?.response?.data?.message;
  }
};

// console.log(`${API_URL}/properties?authKey=${API_KEY}`, "apicall");

export const getPropertyById = async <T>({
  id,
}: {
  id: string;
}): Promise<T | void> => {
  // console.log("api url", `${API_URL}/properties/detail/${id}?authKey=${API_KEY}`)

  try {
    const { data } = await axios.get<T>(
      `${API_URL}/properties/detail/${id}?authKey=${API_KEY}`
    );
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // console.log("api error", error.message);
    return error.response.data.message;
  }
};

export const searchProperties = async ({
  searchText,
  sortOrder,
  sortField,
  page = 1,
  limit = 20,
}: {
  searchText?: string;
  sortOrder?: number;
  sortField?: string;
  page?: number;
  limit?: number;
}) => {
  try {
    const bodyparams = {
      searchText,
      sortOrder,
      sortField,
      page,
      limit,
    };
    const { data } = await axios.get(
      `${API_URL}/properties?authKey=${API_KEY}`,
      {
        params: {
          searchText,
          sortOrder,
          sortField,
          page,
          limit,
        },
      }
    );
    data.paramsbody = bodyparams;
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error.response.data.message;
  }
};
