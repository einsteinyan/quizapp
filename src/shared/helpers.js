import { createCookie, readCookie } from 'shared/utils';

export const setToken = (token) => {
    createCookie('access_token', token, 365);
}

export const getToken = () => {
    readCookie('access_token');
}