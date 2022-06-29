import CryptoJs from "crypto-js";
import * as Constants from "src/constants";

export const useLocalStorage = () => {
  const secretKey = Constants.SECRETS_CONFIG.cryptoSecretKey;
  const setToLocalStorage = (key: string, value: string, encrypt = false) => {
    if (encrypt) {
      const cipher = CryptoJs.AES.encrypt(JSON.stringify(value), secretKey);
      localStorage.setItem(key, cipher.toString());
    }
    localStorage.setItem(key, value as string);
  };

  const getFromLocalStorage = (key: string, encrypted = false) => {
    if (encrypted) {
      const cipher = localStorage.getItem(key);
      if (!cipher) {
        return null;
      }
      const bytes = CryptoJs.AES.decrypt(cipher, secretKey);
      const plaintext = bytes.toString(CryptoJs.enc.Utf8);
      return JSON.parse(plaintext);
    } else {
      return localStorage.getItem(key);
    }
  };

  return {
    setToLocalStorage,
    getFromLocalStorage,
  };
};

export namespace UseLocalStorageType {
  export type ValueType =
    | string
    | number
    | boolean
    | { [keys in string]: string };
}
