import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import CustomInput from "../../custom-input/CustomInput";
import { sxStylesLoginForm } from "./loginForm.styles";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { handleAuthLogin } from "../../../services/api/apiService";
import { handleErrorToastify } from "../../toastify/Toastify";
import { AuthContext } from "../../../contexts/auth-context/authContext";

const LoginForm = () => {

    const navigate = useNavigate();
    const theme = useTheme();
    const { t } = useTranslation();

    const { isAuth, logIn } = useContext(AuthContext);

    const [errorLoginState, setErrorLoginState] = useState('');

    const handleNavigateToRegisterForm = () => {
        navigate('/register');
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const loginResponse = await handleAuthLogin(data);
            if (loginResponse.status === 200) {
                logIn(loginResponse.data);
                navigate('/app/summary');
                reset();
                setErrorLoginState('');
            }
        } catch (e) {
            console.log(e);
            if (e.response.status === 404) {
                setErrorLoginState(`${t('incorrect-e-mail-or-password-error')}`);
            } else {
                handleErrorToastify(`${t('problem-with-server-occurred-error')}`);
            }
        }
    };

    useEffect(() => {
        document.title = 'MCW | Login';
    }, []);

    return (
        <>
            <Box component='form' onSubmit={handleSubmit(onSubmit)}>
                <Box sx={sxStylesLoginForm.formBoxElement} >
                    <CustomInput aria-label="login-input" sx={sxStylesLoginForm.formLoginInput} placeholder={`${t('email-placeholder')}`} type='text' {...register('email', {
                        required: `${t('form-required-message')}`,
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: `${t('form-incorrect-email-message')}`
                        },
                        onChange: (e) => setErrorLoginState('')
                    })} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {errors.email?.message}
                    </Typography>
                </Box>
                <Box sx={sxStylesLoginForm.formBoxElement} >
                    <CustomInput aria-label="password-input" sx={sxStylesLoginForm.formLoginInput} placeholder={`${t('password-placeholder')}`} type='password' {...register('password', {
                        required: `${t('form-required-message')}`,
                        minLength: {
                            value: 6,
                            message: `${t('form-incorrect-password-message')}`
                        },
                        onChange: (e) => setErrorLoginState('')
                    })} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {errors.password?.message}
                        {errorLoginState}
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