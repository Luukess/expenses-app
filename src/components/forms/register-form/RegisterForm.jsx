import React, { useState } from "react";
import { Box, FormControlLabel, Button, Checkbox, Typography, useTheme } from "@mui/material";
import CustomInput from "../../custom-input/CustomInput";
import { sxStylesRegisterForm } from "./registerForm.style";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {

    const theme = useTheme();
    const navigate = useNavigate();
    const [passwordValue, setPasswordValue] = useState('');
    const [repeatPasswordValue, setRepeatPasswordValue] = useState('');

    const handleNavigateToLoginForm = () => {
        navigate('/login');
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <>
            <Box component='form' onSubmit={handleSubmit(onSubmit)}>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <CustomInput sx={sxStylesRegisterForm.formInputElement} type='text' placeholder='Login' {...register('userName', {
                        required: 'Field is required',
                        minLength: {
                            value: 4,
                            message: 'Login is to short. Min 4 chars'
                        }
                    })} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main} >
                        {errors.userName?.message}
                    </Typography>
                </Box>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <CustomInput sx={sxStylesRegisterForm.formInputElement} type='text' placeholder='Email' {...register('email', {
                        required: 'Filed is required',
                        pattern: {
                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                            message: 'Inncorect email'
                        }
                    })} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {errors.email?.message}
                    </Typography>
                </Box>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <CustomInput sx={sxStylesRegisterForm.formInputElement} type='password' placeholder='Password' {...register('password', {
                        required: 'Field is required',
                        minLength: {
                            value: 6,
                            message: 'Password is to short. Min 6 chars'
                        },
                        onChange: (e) => { setPasswordValue(e.target.value) }
                    })} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {errors.password?.message}
                    </Typography>
                </Box>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <CustomInput sx={sxStylesRegisterForm.formInputElement} type='password' placeholder='Repeat password' {...register('repeatPassword', {
                        required: 'Field is required',
                        onChange: (e) => { setRepeatPasswordValue(e.target.value) }
                    })} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {errors.repeatPassword?.message}
                        {passwordValue !== repeatPasswordValue ? 'The passwords are not similar' : null}
                    </Typography>
                </Box>
                <Box sx={sxStylesRegisterForm.checkboxFormElement}>
                    <FormControlLabel label='Confirm regulations' labelPlacement="start" control={<Checkbox color="primary" {...register('confirmRegulation', {
                        required: 'Field is required'
                    })} />} />
                    <Typography fontSize={14} ml={1} color={theme.palette.error.main}>
                        {errors.confirmRegulation?.message}
                    </Typography>
                </Box>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <Button type="submit" sx={sxStylesRegisterForm.formInputElement} variant="contained">Register</Button>
                </Box>
            </Box>
            <Box sx={sxStylesRegisterForm.boxFoemElement}>
                <Button onClick={handleNavigateToLoginForm} type="button" sx={sxStylesRegisterForm.formInputElement} variant="contained">Back to login</Button>
            </Box>
        </>
    );
};

export default RegisterForm;