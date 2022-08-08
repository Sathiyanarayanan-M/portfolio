import CryptoJs from "crypto-js";
import * as Constants from "src/constants";

export const useLocalStorage = () => {
  const secretKey = Constants.SECRETS_CONFIG.cryptoSecretKey;
  const setToLocalStorage = (
    key: string,
    value: any,
    stringify?: boolean,
    encrypt = false
  ) => {
    let formattedValue = value;
    if (stringify) {
      formattedValue = JSON.stringify(value);
    }
    if (encrypt) {
      const cipher = CryptoJs.AES.encrypt(formattedValue, secretKey);
      localStorage.setItem(key, cipher.toString());
    }
    localStorage.setItem(key, formattedValue);
  };

  const getFromLocalStorage = (
    key: string,
    parse?: boolean,
    encrypted = false
  ) => {
    let localItem = localStorage.getItem(key);
    if (parse && localItem) {
      localItem = JSON.parse(localItem);
    }
    if (encrypted) {
      if (!localItem) {
        return null;
      }
      const bytes = CryptoJs.AES.decrypt(localItem, secretKey);
      const plaintext = bytes.toString(CryptoJs.enc.Utf8);
      return JSON.parse(plaintext);
    }
    return localItem;
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
