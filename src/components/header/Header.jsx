import React, { useContext, useEffect, useState } from "react";
import { AppBar, Toolbar, FormControlLabel, Switch, Box, Typography, SvgIcon } from "@mui/material";
import { ThemeStateContext } from "../../contexts/theme-context/themeContext";
import { AuthContext } from "../../contexts/auth-context/authContext";
import { sxStylesHeader } from "./header.style";
import MobileNav from "./components/mobile-nav/MobileNav";
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import LngButton from "./components/lng-button/LngButton";

const Header = () => {

    const { selectedTheme, setSelectedTheme } = useContext(ThemeStateContext);
    const authValuesContext = useContext(AuthContext);

    const getTheme = localStorage.getItem('theme');
    const [themeMode, setThemeMode] = useState(getTheme === 'dark' ? true : false);

    useEffect(() => {
        localStorage.setItem('theme', themeMode ? 'dark' : 'light');
        setSelectedTheme(themeMode);
    }, [themeMode]);

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ minHeight: '64px', justifyContent: 'space-between' }}>
                    <Box component='div' sx={{ display: 'flex', alignItems: 'center' }}>
                        {authValuesContext.isAuth &&
                            <MobileNav />
                        }
                        <Typography sx={sxStylesHeader.logo}>
                            MyCoinWallet
                        </Typography>
                    </Box>
                    <Box component='div' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Box>
                            <LngButton />
                        </Box>
                        <SvgIcon fontSize="small" sx={sxStylesHeader.switchModeIcons}>
                            <WbSunnyIcon />
                        </SvgIcon>
                        <Box component='div'>
                            <FormControlLabel sx={{ margin: '0px' }} control={<Switch onChange={(e) => setThemeMode(e.target.checked)} checked={themeMode} value={themeMode} />} />
                        </Box>
                        <SvgIcon fontSize="small" sx={sxStylesHeader.switchModeIcons} >
                            <NightsStayIcon />
                        </SvgIcon>
                    </Box>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Header;