import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import { sxStylesGridCaption } from "./gridCaption.style";

const GridCaption = ({ children, caption }) => {

    return (
        <>
            <Box sx={sxStylesGridCaption.captionContainer}>
                <Typography variant="h6" sx={sxStylesGridCaption.captionTypography}>
                    {caption}
                </Typography>
                <IconButton color="primary">
                    {children}
                </IconButton>
            </Box>
        </>
    );
};

export default GridCaption;