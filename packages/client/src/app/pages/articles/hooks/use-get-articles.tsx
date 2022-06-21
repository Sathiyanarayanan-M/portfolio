import * as API from "src/app/api";

export const useGetArticles = (queryString = ""): IUseProjectList.Return => {
  const { data, isFetching: isLoading } = API.Server.useQueryRequest({
    queryParams: ["articles"],
    requestOptions: {
      method: "GET",
      url: `/api/articles?${queryString}`,
    },
  });
  return { data: data?.data?.data, isLoading, error: data?.data?.error };
};

export namespace IUseProjectList {
  export interface Return {
    data?: Data;
    error: boolean;
    isLoading: boolean;
  }

  export interface Source {
    id: string;
    name: string;
  }

  export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
  }

  export interface Data {
    status: string;
    totalResults: number;
    articles: Article[];
  }
}
