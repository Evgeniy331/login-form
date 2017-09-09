import axios from "axios";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESSFUL = "LOGIN_SUCCESSFUL";
export const LOGIN_REQUEST_ERROR = "LOGIN_REQUEST_ERROR";
export const ADD_REQUEST = "ADD_REQUEST";
export const REMOVE_REQUEST = "REMOVE_REQUEST";

export function sendLoginRequest(reqBody) {

    return (dispatch, getStore) => {

        dispatch({ type: LOGIN_REQUEST });
        dispatch({ type: ADD_REQUEST });

        return axios.post("/api/login", reqBody)
            .then(response => {
                dispatch(loginSuccesful(response.data));
                dispatch({ type: REMOVE_REQUEST });
            })
            .catch(response => {
                dispatch(loginError(response.data));
                dispatch({ type: REMOVE_REQUEST });
            });
    };
}

export function loginSuccesful(data) {
    return {
        type: LOGIN_SUCCESSFUL,
        data
    };
}

export function loginError(data) {

    return {
        type: LOGIN_REQUEST_ERROR,
        data
    };
}