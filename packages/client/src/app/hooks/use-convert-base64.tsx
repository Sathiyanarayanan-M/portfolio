import CryptoJs from "crypto-js";

export const useConvertBase64 = (file: Blob) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

export const useConvertBase64StringWithCryptoJS = () => {
  const encode = (str = "") => {
    const sourceWordArray = CryptoJs.enc.Utf8.parse(str);
    const base64StdIn = CryptoJs.enc.Base64.stringify(sourceWordArray);
    return base64StdIn;
  };
  const decode = (base64Str = "") => {
    var words = CryptoJs.enc.Base64.parse(base64Str);
    var textString = CryptoJs.enc.Utf8.stringify(words);
    return textString;
  };
  return {
    encode,
    decode,
  };
};
