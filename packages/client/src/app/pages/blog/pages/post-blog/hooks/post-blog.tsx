import * as Axios from "axios";
import * as ReactQuery from "react-query";
import * as API from "src/app/api";
import * as Hooks from "src/app/hooks";

export const usePostBlog = (props: IUsePostBlog.Props) => {
  const { isLoading, mutate, data } = API.Server.useMutationRequest({
    queryParams: ["postblog"],
    requestOptions: {
      method: "POST",
      url: `/api/blog/post`,
    },
    requestCallbacks: props?.callbacks,
  });

  return {
    data: data?.data?.data,
    mutate,
    isLoading,
    error: data?.data,
  };
};

export namespace IUsePostBlog {
  export interface Props {
    callbacks?: ReactQuery.MutationOptions;
  }
}
