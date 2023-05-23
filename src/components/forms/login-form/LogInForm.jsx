import React, { useEffect } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import CustomInput from "../../custom-input/CustomInput";
import { sxStylesLoginForm } from "./loginForm.styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const LoginForm = () => {

    const navigate = useNavigate();
    const theme = useTheme();
    const { t } = useTranslation();

    const handleNavigateToRegisterForm = () => {
        navigate('/register');
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
    };

    useEffect(() => {
        document.title = 'MCW | Login';
    }, []);

    return (
        <>
            <Box component='form' onSubmit={handleSubmit(onSubmit)}>
                <Box sx={sxStylesLoginForm.formBoxElement} >
                    <CustomInput aria-label="login-input" sx={sxStylesLoginForm.formLoginInput} placeholder={`${t('email-placeholder')}`} type='text' {...register('userName', {
                        required: `${t('form-required-message')}`,
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: `${t('form-incorrect-email-message')}`
                        }
                    })} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {errors.userName?.message}
                    </Typography>
                </Box>
                <Box sx={sxStylesLoginForm.formBoxElement} >
                    <CustomInput aria-label="password-input" sx={sxStylesLoginForm.formLoginInput} placeholder={`${t('password-placeholder')}`} type='password' {...register('password', {
                        required: `${t('form-required-message')}`,
                        minLength: {
                            value: 6,
                            message: `${t('form-incorrect-password-message')}`
                        }
                    })} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {errors.password?.message}
                    </Typography>
                </Box>
                <Box sx={sxStylesLoginForm.formBoxElement} >
                    <Button type="submit" aria-label="login-button" variant="contained" sx={sxStylesLoginForm.formLoginInput}>{`${t('login-button')}`}</Button>
                </Box>
            </Box>
            <Box compoent='div' sx={sxStylesLoginForm.formBoxElement}>
                <Button onClick={handleNavigateToRegisterForm} aria-label="create-account-button" variant='contained' sx={sxStylesLoginForm.formLoginInput} >{`${t('create-new-account-button')}`}</Button>
            </Box>
        </>
    );
};

export default LoginForm;