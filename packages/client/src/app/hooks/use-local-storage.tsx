import CryptoJs from "crypto-js";
import * as Constants from "src/constants";

export const useLocalStorage = () => {
  const secretKey = Constants.SECRETS_CONFIG.cryptoSecretKey;
  const setToLocalStorage: UseLocalStorageType.SetToLocalStorageType = (
    key,
    value,
    options
  ) => {
    let formattedValue = value;
    if (options?.stringify) {
      formattedValue = JSON.stringify(value);
    }
    if (options?.encrypt) {
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

  const removeFromStorage = (key: string) => localStorage.removeItem(key);

  const clearLocalStorage = () => {
    const excemptionObjects = Constants.localStorageClearExcemptionKeys.map(
      (item) => ({
        ...item,
        value: localStorage.getItem(item.key),
      })
    );
    localStorage.clear();
    excemptionObjects.forEach((item) => {
      setToLocalStorage(item.key, item.value, { ...item });
    });
  };

  return {
    setToLocalStorage,
    getFromLocalStorage,
    removeFromStorage,
    clearLocalStorage,
  };
};

export namespace UseLocalStorageType {
  export type ValueType =
    | string
    | number
    | boolean
    | { [keys in string]: string };

  export type SetToLocalStorageType = (
    key: string,
    value: any,
    options?: SetToLocalStorageOptions
  ) => void;
  export interface SetToLocalStorageOptions {
    encrypt?: boolean;
    stringify?: boolean;
  }
}
