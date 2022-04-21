export enum USER_ACTION_TYPES {
    SET_CURRENT_USER = 'user/SET_CURRENT_USER',
    GOOGLE_SIGN_IN_START = 'user/GOOGLE_SIGN_IN_START',
    EMAIL_SIGN_IN_START = 'user/EMAIL_SIGN_IN_START',
    SIGN_IN_SUCCESS = 'user/SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE = 'user/SIGN_IN_FAILURE',
    CHECK_USER_SESSION = 'user/CHECK_USER_SESSION',
    SIGN_OUT_START = 'user/SIGN_OUT_START',
    SIGN_OUT_SUCCESS = 'user/SIGN_OUT_SUCCESS',
    SIGN_OUT_FAILURE = 'user/SIGN_OUT_FAILURE',
    SIGN_UP_START = 'user/SIGN_UP_START',
    SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS',
    SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE'
};

export type User = {
    email: string;
    password: string;
    displayName: string
};