import React from "react";
import { Box, FormControlLabel, Button } from "@mui/material";
import CustomInput from "../../custom-input/CustomInput";
import { CheckBox } from "@mui/icons-material";
import { sxStylesRegisterForm } from "./registerForm.style";

const RegisterForm = () => {


    return (
        <>
            <Box component='form'>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <CustomInput sx={sxStylesRegisterForm.formInputElement} type='text' placeholder='Login' />
                </Box>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <CustomInput sx={sxStylesRegisterForm.formInputElement} type='email' placeholder='Email' />
                </Box>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <CustomInput sx={sxStylesRegisterForm.formInputElement} type='password' placeholder='Password' />
                </Box>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <CustomInput sx={sxStylesRegisterForm.formInputElement} type='password' placeholder='Repeat password' />
                </Box>
                <Box sx={sxStylesRegisterForm.checkboxFormElement}>
                    <FormControlLabel label='Confirm regulations' labelPlacement="start" control={<CheckBox color="primary" />} />
                </Box>
                <Box sx={sxStylesRegisterForm.boxFoemElement}>
                    <Button sx={sxStylesRegisterForm.formInputElement} variant="contained">Register</Button>
                </Box>
            </Box>
        </>
    );
};

export default RegisterForm;