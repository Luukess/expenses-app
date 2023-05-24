import { useState } from "react";
import { useCookies } from "react-cookie";

export const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken']);

    const logIn = (data) => {
        if (data) {
            console.log('login data', data)
            setCookie('accessToken', data.accessToken, { path: '/' });
            setCookie('refreshToken', data.refreshToken, { path: '/' });
            setIsAuth(true);
        };
    };

    const logOut = () => {
        removeCookie('accessToken', { path: '/' });
        removeCookie('refreshToken', { path: '/' });
        setIsAuth(false);
    };

    return { isAuth, logIn, logOut };

};

