import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import CustomInput from "../../custom-input/CustomInput";
import { sxStylesLoginForm } from "./loginForm.styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginForm = () => {

    const navigate = useNavigate();
    const theme = useTheme();

    const handleNavigateToRegisterForm = () => {
        navigate('/register');
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
    };

    return (
        <>
            <Box component='form' onSubmit={handleSubmit(onSubmit)}>
                <Box sx={sxStylesLoginForm.formBoxElement} >
                    <CustomInput aria-label="login-input" sx={sxStylesLoginForm.formLoginInput} placeholder='Email' type='text' {...register('userName', {
                        required: 'Field is required',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Inncorect email'
                        }
                    })} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {errors.userName?.message}
                    </Typography>
                </Box>
                <Box sx={sxStylesLoginForm.formBoxElement} >
                    <CustomInput aria-label="password-input" sx={sxStylesLoginForm.formLoginInput} placeholder='Password' type='password' {...register('password', {
                        required: 'Field is required',
                        minLength: {
                            value: 6,
                            message: 'Passwort is to short. Min 6 chars'
                        }
                    })} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {errors.password?.message}
                    </Typography>
                </Box>
                <Box sx={sxStylesLoginForm.formBoxElement} >
                    <Button type="submit" aria-label="login-button" variant="contained" sx={sxStylesLoginForm.formLoginInput}>Log in</Button>
                </Box>
            </Box>
            <Box compoent='div' sx={sxStylesLoginForm.formBoxElement}>
                <Button onClick={handleNavigateToRegisterForm} aria-label="create-account-button" variant='contained' sx={sxStylesLoginForm.formLoginInput} >Create new account</Button>
            </Box>
        </>
    );
};

export default LoginForm;