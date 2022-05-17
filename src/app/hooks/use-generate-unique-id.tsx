import CryptoJS from "crypto-js";

export const useGenerateUniqueId = (str: string) => {
  const secretKey = new Date().getTime().toString();

  const encrypted = CryptoJS.AES.encrypt(str, secretKey);

  const URLEncode = encodeURIComponent(encrypted.toString());

  return URLEncode;
};
