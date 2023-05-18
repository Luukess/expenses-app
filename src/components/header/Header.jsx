import React, { useContext, useEffect, useState } from "react";
import { AppBar, Toolbar, FormControlLabel, Switch } from "@mui/material";
import { ThemeStateContext } from "../../contexts/theme-context/themeContext";

const Header = () => {

    const { selectedTheme, setSelectedTheme } = useContext(ThemeStateContext);

    const getTheme = localStorage.getItem('theme');
    const [themeMode, setThemeMode] = useState(getTheme === 'dark' ? true : false);

    useEffect(() => {
        localStorage.setItem('theme', themeMode ? 'dark' : 'light');
        setSelectedTheme(themeMode);
    }, [themeMode]);

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ minHeight: '64px' }}>
                    <FormControlLabel control={<Switch onChange={(e) => setThemeMode(e.target.checked)} checked={themeMode} value={themeMode} />} />
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;