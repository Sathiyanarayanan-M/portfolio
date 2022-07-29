import * as Axios from "axios";
import { setupCache } from "axios-cache-adapter";
import * as ReactQuery from "react-query";
import * as Constants from "src/constants";

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

export const useQueryRequest = ({
  queryParams = [],
  requestOptions,
  requestData,
  reactQueryoptions,
}: IUseQueryRequest.Props) => {
  return ReactQuery.useQuery(
    queryParams,
    () => Request(requestOptions, requestData),
    reactQueryoptions
  );
};
export const useMutationRequest = ({
  requestOptions,
  requestCallbacks,
}: IUseQueryRequest.Props) => {
  return ReactQuery.useMutation(
    (requestData: any) => Request(requestOptions, requestData),
    requestCallbacks
  );
};

export namespace IUseQueryRequest {
  export interface Props {
    queryParams?: string[];
    requestOptions: StringObject;
    requestData?: any;
    reactQueryoptions?:
      | Omit<
          ReactQuery.UseQueryOptions<any, unknown, any, string[]>,
          "queryKey" | "queryFn"
        >
      | undefined;
    requestCallbacks?: ReactQuery.MutationOptions;
  }
}
