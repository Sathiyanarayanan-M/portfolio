import Swal from "sweetalert";
import { SwalOptions } from "sweetalert/typings/modules/options";

export const useSwal = () => {
  const confirmSwal = (params: SwalType.SwalProps) => {
    return Swal(params);
  };

  return { confirmSwal };
};

export namespace SwalType {
  export type SwalProps = Partial<SwalOptions> | string;
}
