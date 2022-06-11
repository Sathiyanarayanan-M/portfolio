import * as Axios from "axios";
import * as ReactQuery from "react-query";
import * as Constants from "src/constants";
import * as Hooks from "src/app/hooks";

// console.log(Constants.API_CONFIG.baseUrl);

const client = Axios.default.create({
  baseURL: Constants.API_CONFIG.baseUrl,
});

export const Request = async (options: StringObject, data?: any) => {
  const { getIdToken } = Hooks.useFirebaseAuth();
  const token = (await getIdToken()) as string;

  return client({
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*",
      //   Authorization: token,
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
