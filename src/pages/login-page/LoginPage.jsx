import React from "react";
import { Avatar, Box, Button, Paper, SvgIcon, Typography } from "@mui/material";
import { sxStylesLoginPage } from "./loginPage.style";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CustomInput from "../../components/custom-input/CustomInput";

const LoginPage = () => {

    return (
        <>
            <Box component='div' sx={sxStylesLoginPage.loginPageContainer}>
                <Paper elevation={10} sx={{ width: '400px', padding: '10px', borderRadius: '10px', position: 'relative' }} >
                    <Avatar sx={sxStylesLoginPage.loginAvatar} >
                        <SvgIcon sx={{ width: '100%', height: '100%', color: '#ffd700' }}>
                            <MonetizationOnIcon />
                        </SvgIcon>
                    </Avatar>
                    <Box>
                        <Typography variant="h4" pt={6} pb={1} align="center">
                            Welcome to MyCoinWallet
                        </Typography>
                        <Typography p={1} align="center" >
                            Sing in to your account
                        </Typography>
                    </Box>
                    <Box component='form' >
                        <Box sx={sxStylesLoginPage.formBoxElement} >
                            <CustomInput aria-label="login-input" sx={sxStylesLoginPage.formLoginInput} placeholder='Login' type='text' />
                        </Box>
                        <Box sx={sxStylesLoginPage.formBoxElement} >
                            <CustomInput aria-label="password-input" sx={sxStylesLoginPage.formLoginInput} placeholder='Password' type='password' />
                        </Box>
                        <Box sx={sxStylesLoginPage.formBoxElement} >
                            <Button aria-label="login-button" variant="contained" sx={sxStylesLoginPage.formLoginInput}>Log in</Button>
                        </Box>
                    </Box>
                </Paper >
            </Box >
        </>
    );
};

export default LoginPage;