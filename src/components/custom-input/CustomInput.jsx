import React from "react";
import { styled, InputBase, alpha } from "@mui/material";


const CustomInput = (inputProps) => {

    const DefaultCustomInput = styled(InputBase)(({ theme }) => ({
        '& .MuiInputBase-input': {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
            border: '1px solid',
            borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
            padding: '10px 12px',
            transition: theme.transitions.create([
                'border-color',
                'background-color',
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
    }));


    return (
        <>
            <DefaultCustomInput {...inputProps} />
        </>
    );
};

export default CustomInput;