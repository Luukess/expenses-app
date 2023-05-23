import React, { useEffect, useState } from "react";
import { Box, FormControlLabel, Button, Checkbox, Typography, useTheme } from "@mui/material";
import CustomInput from "../../custom-input/CustomInput";
import { sxStylesRegisterForm } from "./registerForm.style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const RegisterForm = () => {

    const theme = useTheme();
    const navigate = useNavigate();
    const { t } = useTranslation();

    const [passwordValue, setPasswordValue] = useState('');
    const [repeatPasswordValue, setRepeatPasswordValue] = useState('');

    const handleNavigateToLoginForm = () => {
        navigate('/login');
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    useEffect(() => {
        document.title = 'SWC | Registration';
    }, [])

    return (
        <>
            <Box component='form' onSubmit={handleSubmit(onSubmit)}>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <CustomInput sx={sxStylesRegisterForm.formInputElement} type='text' placeholder={`${t('login-placeholder')}`} {...register('userName', {
                        required: `${t('form-required-message')}`,
                        minLength: {
                            value: 4,
                            message: `${t('form-login-placeholder-message')}`
                        }
                    })} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main} >
                        {errors.userName?.message}
                    </Typography>
                </Box>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <CustomInput sx={sxStylesRegisterForm.formInputElement} type='text' placeholder={`${t('email-placeholder')}`} {...register('email', {
                        required: `${t('form-required-message')}`,
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: `${t('form-incorrect-email-message')}`
                        }
                    })} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {errors.email?.message}
                    </Typography>
                </Box>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <CustomInput sx={sxStylesRegisterForm.formInputElement} type='password' placeholder={`${t('password-placeholder')}`} {...register('password', {
                        required: `${t('form-required-message')}`,
                        minLength: {
                            value: 6,
                            message: `${t('form-incorrect-password-message')}`
                        },
                        onChange: (e) => { setPasswordValue(e.target.value) }
                    })} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {errors.password?.message}
                    </Typography>
                </Box>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <CustomInput sx={sxStylesRegisterForm.formInputElement} type='password' placeholder={`${t('repeat-password-placeholder')}`} {...register('repeatPassword', {
                        required: `${t('form-required-message')}`,
                        onChange: (e) => { setRepeatPasswordValue(e.target.value) }
                    })} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {errors.repeatPassword?.message}
                    </Typography>
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {passwordValue !== repeatPasswordValue ? `${t('form-repeat-password-message')}` : null}
                    </Typography>
                </Box>
                <Box sx={sxStylesRegisterForm.checkboxFormElement}>
                    <FormControlLabel label={`${t('confirm-regulations-label')}`} labelPlacement="start" control={<Checkbox color="primary" {...register('confirmRegulation', {
                        required: `${t('form-required-message')}`
                    })} />} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {errors.confirmRegulation?.message}
                    </Typography>
                </Box>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <Button type="submit" sx={sxStylesRegisterForm.formInputElement} variant="contained">{`${t('register-button')}`}</Button>
                </Box>
            </Box>
            <Box sx={sxStylesRegisterForm.boxFoemElement}>
                <Button onClick={handleNavigateToLoginForm} type="button" sx={sxStylesRegisterForm.formInputElement} variant="contained">{`${t('back-to-login-button')}`}</Button>
            </Box>
        </>
    );
};

export default RegisterForm;