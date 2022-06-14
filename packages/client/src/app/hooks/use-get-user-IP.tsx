import * as API from "src/app/api";

export const useGetUserGeoLocation = (): IUseGetUserGeoLocation.Return => {
  const { data, isFetching: isLoading } = API.Server.useQueryRequest({
    queryParams: ["userGeoLocation"],
    requestOptions: {
      method: "GET",
      url: "https://geolocation-db.com/json/",
    },
    reactQueryoptions: {
      staleTime: Infinity,
    },
  });
  return { data: data?.data, isLoading, error: data?.data?.error };
};

export namespace IUseGetUserGeoLocation {
  export interface Return {
    data?: Data[];
    error: boolean;
    isLoading: boolean;
  }

  export interface Data {
    country_code: string;
    country_name: string;
    city: string;
    postal: string;
    latitude: number;
    longitude: number;
    IPv4: string;
    state: string;
  }
}
