import * as API from "src/app/api";

export const useProjectList = (): IUseProjectList.Return => {
  const { data, isFetching: isLoading } = API.Server.useQueryRequest(
    ["projects"],
    {
      method: "GET",
      url: "/api/projects",
    }
  );
  return { data: data?.data?.data, isLoading, error: data?.data?.error };
};

export namespace IUseProjectList {
  export interface Return {
    data?: Data[];
    error: boolean;
    isLoading: boolean;
  }

  export interface Data {
    image: string;
    title: string;
    techsUsed: string;
    detailsUrl: string;
    role: string;
    description: string;
  }
}
