import React, { forwardRef } from "react";
import { styled, InputBase, alpha, TextField, useTheme } from "@mui/material";

const CustomInput = forwardRef((inputProps, ref) => {
    const { sx, ...rest } = inputProps;

    const theme = useTheme();

    const sxStylesInputBase = {
        textField: {
            '& .MuiInputBase-input': {
                borderRadius: 1,
                position: 'relative',
                backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#232323',
                border: '1px solid',
                borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#1c1c1c',
                padding: '10px 12px',
                transition: theme.transitions.create([
                    'border-color',
                    // 'background-color',
                    'box-shadow',
                ]),
                fontFamily: [
                    'Lato',
                    'sans-serif'
                ].join(','),
                '&:focus': {
                    boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
                    borderColor: theme.palette.primary.main,
                },
            },
        }
    }

    return (
        <>
            <InputBase variant="outlined" {...rest} sx={{ ...sx, ...sxStylesInputBase.textField }} ref={ref} />
        </>
    );
});

export default CustomInput;