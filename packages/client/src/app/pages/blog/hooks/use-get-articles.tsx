import * as API from "src/app/api";
import * as QueryString from "query-string";

export const useGetArticles = (
  queryParams: IUseArticleList.Props
): IUseArticleList.Return => {
  const encodeSearchParams = QueryString.stringify(queryParams);

  const { data, isFetching: isLoading } = API.Server.useQueryRequest({
    queryParams: ["articles", encodeSearchParams],
    requestOptions: {
      method: "GET",
      url: `/api/articles?${encodeSearchParams}`,
    },
  });

  return {
    data: data?.data?.data,
    isLoading,
    error: data?.data?.error,
  };
};

export namespace IUseArticleList {
  export interface Props {
    page?: number;
    pageSize?: number;
  }
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
