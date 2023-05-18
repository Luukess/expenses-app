import React from "react";
import { Box } from "@mui/material";
import Header from "../header/Header";
import { sxStylesMainLayout } from "./mainLoyout.style";

const MainLayout = ({children}) => {

    return (
        <>
            <Box sx={sxStylesMainLayout.mainLayout}>
                <Box sx={sxStylesMainLayout.navSidebar}>
                    sadadadadadadadad
                </Box>
                <Box component='main' sx={sxStylesMainLayout.childrenContainer}>
                    <Header />
                    {children}
                </Box>
            </Box>
        </>
    );
};

export default MainLayout;