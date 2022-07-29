import * as Axios from "axios";
import * as ReactQuery from "react-query";
import * as API from "src/app/api";
import * as Hooks from "src/app/hooks";
export const compileCode = (): ICompileCode.Return => {
  const { isLoading, mutate, data } = API.Server.useMutationRequest({
    queryParams: ["compileCode"],
    requestOptions: {
      method: "POST",
      url: `/api/code/compile`,
    },
  });

  return {
    data: data?.data?.data,
    mutate,
    isLoading,
    error: data?.data,
  };
};

export namespace ICompileCode {
  export interface Return {
    data?: CompilerRes;
    error: boolean;
    isLoading: boolean;
    mutate: ReactQuery.UseMutateFunction<
      Axios.AxiosResponse<any, any>,
      unknown,
      any,
      unknown
    >;
  }

  export interface Status {
    id: number;
    description: string;
  }

  export interface Language {
    id: number;
    name: string;
  }

  export interface CompilerRes {
    source_code: string;
    language_id: number;
    stdin: string;
    expected_output?: any;
    stdout: string;
    status_id: number;
    created_at: Date;
    finished_at: Date;
    time: string;
    memory: number;
    stderr?: any;
    token: string;
    number_of_runs: number;
    cpu_time_limit: string;
    cpu_extra_time: string;
    wall_time_limit: string;
    memory_limit: number;
    stack_limit: number;
    max_processes_and_or_threads: number;
    enable_per_process_and_thread_time_limit: boolean;
    enable_per_process_and_thread_memory_limit: boolean;
    max_file_size: number;
    compile_output?: any;
    exit_code: number;
    exit_signal?: any;
    message?: any;
    wall_time: string;
    compiler_options?: any;
    command_line_arguments?: any;
    redirect_stderr_to_stdout: boolean;
    callback_url?: any;
    additional_files?: any;
    enable_network: boolean;
    status: Status;
    language: Language;
  }
}
