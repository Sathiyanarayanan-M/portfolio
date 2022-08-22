import * as API from "src/app/api";

export const useGetBlogOptions = (): IUseBlogOptions.Return => {
  const { data, isFetching: isLoading } = API.Server.useQueryRequest({
    queryParams: ["blogs"],
    requestOptions: {
      method: "GET",
      url: `/api/blog-options`,
    },
  });

  return {
    data: data?.data?.data,
    isLoading,
    error: data?.data?.error,
  };
};

export namespace IUseBlogOptions {
  export interface Return {
    data?: Data;
    error: boolean;
    isLoading: boolean;
  }

  export interface Data {
    tags?: string[];
    topics?: string[];
  }
}
