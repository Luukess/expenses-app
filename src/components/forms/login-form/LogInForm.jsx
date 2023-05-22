import React from "react";
import { Box, Button } from "@mui/material";
import CustomInput from "../../custom-input/CustomInput";
import { sxStylesLoginForm } from "./loginForm.styles";

const LoginForm = () => {

    return (
        <>
            <Box component='form'>
                <Box sx={sxStylesLoginForm.formBoxElement} >
                    <CustomInput aria-label="login-input" sx={sxStylesLoginForm.formLoginInput} placeholder='Login' type='text' />
                </Box>
                <Box sx={sxStylesLoginForm.formBoxElement} >
                    <CustomInput aria-label="password-input" sx={sxStylesLoginForm.formLoginInput} placeholder='Password' type='password' />
                </Box>
                <Box sx={sxStylesLoginForm.formBoxElement} >
                    <Button aria-label="login-button" variant="contained" sx={sxStylesLoginForm.formLoginInput}>Log in</Button>
                </Box>
            </Box>
            <Box compoent='div' sx={sxStylesLoginForm.formBoxElement}>
                <Button aria-label="create-account-button" variant='contained' sx={sxStylesLoginForm.formLoginInput} >Create new account</Button>
            </Box>
        </>
    );
};

export default LoginForm;