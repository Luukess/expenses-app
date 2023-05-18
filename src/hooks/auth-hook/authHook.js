import { useState } from "react";

export const useAuth = () => {
    const [isAuth, setIsAuth] = useState(false);

    const logIn = () => {
        setIsAuth(true);
    };

    const logOut = () => {
        setIsAuth(false);
    };

    return { isAuth, logIn, logOut };

};

