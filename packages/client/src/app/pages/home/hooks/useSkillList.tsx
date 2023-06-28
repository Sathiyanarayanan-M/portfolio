import * as API from "src/app/api";

export const useSkillList = (): IUseSkillList.Return => {
    const { data, isFetching: isLoading } = API.Server.useQueryRequest({
        requestOptions: {
            method: "GET",
            url: "/api/skills",
        },
    });
    return { data: data?.data?.data, isLoading, error: data?.data?.error };
};

export namespace IUseSkillList {
    export interface Return {
        data?: Data[];
        error: boolean;
        isLoading: boolean;
    }

    export interface Data {
        imgUrl: string;
        title: string;
    }
}
