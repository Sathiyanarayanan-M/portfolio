import * as Axios from "axios";
import { setupCache } from "axios-cache-adapter";
import * as ReactQuery from "react-query";
import * as Constants from "src/constants";
import * as Hooks from "src/app/hooks";

const cache = setupCache({
  maxAge: 15 * 60 * 1000,
});

const client = Axios.default.create({
  baseURL: Constants.API_CONFIG.baseUrl,
  adapter: cache.adapter,
});

export const Request = async (options: StringObject, data?: any) => {
  return client({
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    ...options,
    data,
  });
};

export const useQueryRequest = (
  queryOptions: string[],
  requestOptions: StringObject,
  data?: any
) => {
  return ReactQuery.useQuery(queryOptions, () => Request(requestOptions, data));
};
