export const REGEX = {
    CHAR_LIMIT_REGEX: /\S{8,20}/,
    LOWER_CASE_REGEX: /[a-z]/,
    UPPER_CASE_REGEX: /[A-Z]/,
    SPECIAL_CHARS_REGEX: /[~!@#$%^&()\-_+/:{}[\],.?]/, // exclude * = | ' " : < > ` special characters
    NUMBERS_REGEX: /[0-9]/,
    EMAIL_REGEX: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    UNICODE_REGEX: /[^\u0000-\u007F]+/g,
    NAME_REGEX: /^[a-zA-Z ]+$/,
    ALPHA_NUMERIC_REGEX: /^[a-zA-Z0-9 ]+$/,
    PASSWORD_REGEX: /^[a-zA-Z0-9[~!@#$%^&()\-_+/:{}[\],.?]{8,20}$/, // Includes uppercase, lowercase, limited special char, numbers, 8-20 char length
    ADV_PASSWORD_REGEX: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[~!@#$%^&()\-_+/:{}[\],.?]).{8,20}$/ // Requires atleast 1 uppercase, 1 lowercase, 1 limited special char, 1 number, 8-20 char length
};
export default REGEX;