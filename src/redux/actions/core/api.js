export const API_REQUEST = '[api] request';
export const API_SUCCESS = '[api] success';
export const API_ERROR = '[api] error';

export const apiRequest = ({body, method, url, feature}) => ({
    type: `${feature} ${API_REQUEST}`,
    payload: body,
    meta: {method, url, feature}
});

export const apiSuccess = ({response, feature}) => ({
    type: `${feature} ${API_REQUEST}`,
    payload: response,
    meta: {feature}
});

export const apiError = ({error, feature}) => ({
    type: `${feature} ${API_ERROR}`,
    payload: error,
    meta: {feature}
});
