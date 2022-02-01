import basicAxios from 'axios';
import axios from 'config/axios';
import { config } from 'config';
import { encode, sha256 } from 'shared/encode';

export const getAccessToken = (data) => {
    // const authData = encode(data.email + ':' + sha256(encode(data.password)));
    const customInstance = basicAxios.create({
        baseURL: config.serverURL,
        headers: {
          'Authorization': '',
          'Content-Type': 'application/json'
        }
      });
    return customInstance.post('/login', data);
}

export const uploadFile = (file) => {
  const customInstance = basicAxios.create({
    baseURL: config.serverURL,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
  let fd = new FormData();
  fd.append('file', file)
  return customInstance.post('/file/upload', fd);
}

// export const uploadFile = (data) => {
//   return axios.post('/file/upload', data);
// }