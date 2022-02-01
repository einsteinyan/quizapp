import CryptoJS from 'crypto-js';

export const encode = (data) => {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(data));
};

export const decode = (data) => {
  return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(data));
};

export const sha256 = (text)=>{
  return CryptoJS.SHA256(text).toString();
};
