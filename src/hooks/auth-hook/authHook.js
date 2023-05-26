import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['accessToken', 'refreshToken']);
    const navigate = useNavigate();

    const logIn = (data) => {
        if (data) {
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

    useEffect(() => {
        if (cookies.accessToken && cookies.refreshToken) {
            setIsAuth(true);
            navigate('/app/summary');
        }
    }, []);

    useEffect(() => {
        if (!cookies.accessToken || !cookies.refreshToken) {
            setIsAuth(false);
            removeCookie('accessToken', { path: '/' });
            removeCookie('refreshToken', { path: '/' });
        }
    }, [cookies.accessToken, cookies.refreshToken])

    return { isAuth, logIn, logOut };

};

