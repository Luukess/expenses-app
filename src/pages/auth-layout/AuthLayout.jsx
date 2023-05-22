import React from "react";
import { Avatar, Box, Paper, SvgIcon, Typography } from "@mui/material";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { sxStylesAuthLayout } from "./authLayout.style";
import { Outlet, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AuthLayout = () => {

    const location = useLocation();
    const { t } = useTranslation();

    return (
        <>
            <Box component='div' sx={sxStylesAuthLayout.loginPageContainer}>
                <Paper elevation={10} sx={{ width: '400px', padding: '10px', borderRadius: '10px', position: 'relative' }} >
                    <Avatar sx={sxStylesAuthLayout.loginAvatar} >
                        <SvgIcon sx={sxStylesAuthLayout.avatarIcon}>
                            <MonetizationOnIcon />
                        </SvgIcon>
                    </Avatar>
                    <Box>
                        <Typography variant="h5" pt={6} pb={1} align="center">
                            {`${t('welcome-to')} MyCoinWallet`}
                        </Typography>
                        <Typography p={1} align="center" >
                            {location.pathname !== '/register' && `${t('sing-in-to-your-account')}`}
                            {location.pathname === '/register' && `${t('create-new-free-account')}`}
                        </Typography>
                    </Box>
                    <Outlet />
                </Paper >
            </Box >
        </>
    );
};

export default AuthLayout;