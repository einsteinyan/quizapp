import axios from 'axios';
import { config } from 'config';
import { getToken } from 'shared/helpers';
import { encode } from 'shared/encode'

const authToken = getToken();
const encodedAuthToken = encode(authToken + ":!JunkJunkJunk!");
axios.defaults.baseURL = config.serverURL;
axios.defaults.headers.common['Authorization'] = 'Basic ' + encodedAuthToken;

// axios
//   .interceptors
//   .request
//   .use(function (config) {
//     // Do something before request is sent
//     let authToken = getToken();
//       let encodedAuthToken = encode(authToken + ":!JunkJunkJunk!");
//     //axios.defaults.headers.common['Authorization'] = 'Basic ' + encodedAuthToken;
//       config.headers.common.Authorization = 'Basic ' + encodedAuthToken;
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// axios
//   .interceptors
//   .response
//   .use(function (response) {
//     return response.data && response.data.error
//       ? Promise.reject(response.data)
//       : Promise.resolve(response.data);
//   }, function (error) {
//     if (error.response && error.response.status === 401 && error.code === "invalid_credentials"){
//       console.log("whatever");
//     }
//     return Promise.reject(error.response.data);
//   });
export default axios;