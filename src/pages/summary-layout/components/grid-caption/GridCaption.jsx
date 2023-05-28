import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { sxStylesGridCaption } from "./gridCaption.style";

const GridCaption = ({ children, caption, onClickEvent }) => {

    return (
        <>
            <Box sx={sxStylesGridCaption.captionContainer}>
                <Typography variant="h6" sx={sxStylesGridCaption.captionTypography}>
                    {caption}
                </Typography>
                <IconButton color="primary" onClick={() => onClickEvent()}>
                    {children}
                </IconButton>
            </Box>
        </>
    );
};

export default GridCaption;