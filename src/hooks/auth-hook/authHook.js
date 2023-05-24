import { useState } from "react";

export const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false);

    const logIn = (data) => {
        if (data) {
            console.log('login data', data)
            setIsAuth(true);
        };
    };

    const logOut = () => {
        setIsAuth(false);
    };

    return { isAuth, logIn, logOut };

};

