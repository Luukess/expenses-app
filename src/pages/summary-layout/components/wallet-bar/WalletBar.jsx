import { Box, Typography } from "@mui/material";
import React from "react";
import { sxStylesWalletBar } from "./walletBar.style";

const WalletBar = () => {

    return (
        <>
            <Box sx={sxStylesWalletBar.boxBorder} component='div'>
                <Typography sx={sxStylesWalletBar.walletText}>
                    Name
                </Typography>
                <Typography sx={sxStylesWalletBar.walletText}>
                    1234 zł
                </Typography>
            </Box>
        </>
    );
};

export default WalletBar;