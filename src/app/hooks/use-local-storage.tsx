import React from "react";
import CryptoJs from "crypto-js";

export const useLocalStorage = () => {
  const secretKey = "sathiya";
  const setToLocalStorage = (
    key: string,
    value: UseLocalStorageType.ValueType,
    encrypt = false
  ) => {
    if (encrypt) {
      const cipher = CryptoJs.AES.encrypt(JSON.stringify(value), secretKey);
      localStorage.setItem(key, cipher.toString());
    }
    localStorage.setItem(key, JSON.stringify(value));
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
      return JSON.parse(localStorage.getItem(key) || "");
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
    | null
    | undefined
    | boolean
    | { [keys in string]: string };
}
