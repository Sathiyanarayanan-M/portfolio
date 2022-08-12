import * as API from "src/app/api";
import * as QueryString from "query-string";

export const useGetBlogs = (
  queryParams: IUseBlogList.Props = {}
): IUseBlogList.Return => {
  const encodeSearchParams = QueryString.stringify(queryParams);

  const { data, isFetching: isLoading } = API.Server.useQueryRequest({
    queryParams: ["blogs", encodeSearchParams],
    requestOptions: {
      method: "GET",
      url: `/api/blogs?${encodeSearchParams}`,
    },
  });

  return {
    data: data?.data?.data,
    isLoading,
    error: data?.data?.error,
  };
};

export namespace IUseBlogList {
  export interface Props {
    page?: number;
    pageSize?: number;
  }
  export interface Return {
    data?: Data[];
    error: boolean;
    isLoading: boolean;
  }

  export interface Data {
    timestamp: number;
    title: string;
    content: string;
    description: string;
    timeToRead: string;
    tags: string[];
    isBookmarked: boolean;
    isLiked: boolean;
    likes: number;
    user: {
      profile: string;
      name: string;
    };
  }
}
