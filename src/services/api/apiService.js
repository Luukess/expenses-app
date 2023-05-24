import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:4700/api',
    timeout: '4000',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
});

export const handleAuthLogin = async (data) => {
    return axiosInstance.post('/auth/login', data);
};

export const handleAuthLogout = async (data) => {
    return axiosInstance.delete('/auth/logout', data);
};

export const handleAuthRegister = async (data) => {
    return axiosInstance.post('/auth/register', data);
}; 