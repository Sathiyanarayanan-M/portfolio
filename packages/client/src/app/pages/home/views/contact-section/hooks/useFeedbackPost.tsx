import * as Axios from "axios";
import * as ReactQuery from "react-query";
import * as API from "src/app/api";
import * as Hooks from "src/app/hooks";

export const useFeedbackPost = (
  props: IPostFeedback.Props
): IPostFeedback.Return => {
  const { isLoading, mutate, data } = API.Server.useMutationRequest({
    queryParams: ["feedbacek"],
    requestOptions: {
      method: "POST",
      url: `/api/feedback`,
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

export namespace IPostFeedback {
  export interface Props {
    callbacks?: ReactQuery.MutationOptions;
  }
  export interface Return {
    data?: any;
    error: boolean;
    isLoading: boolean;
    mutate: ReactQuery.UseMutateFunction<
      Axios.AxiosResponse<any, any>,
      unknown,
      any,
      unknown
    >;
  }
}
