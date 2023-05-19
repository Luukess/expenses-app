import React from "react";
import { Box, ListItemButton } from "@mui/material";
import { sxStylesCustomListItem } from "./customListItem.style";

const CustomListItem = (props) => {

    const { hideNav, linkName, children } = props;

    return (
        <>
            <ListItemButton sx={sxStylesCustomListItem.listItemButton}>
                {children}
                <Box sx={!hideNav ? sxStylesCustomListItem.navLink : { ...sxStylesCustomListItem.navLink, opacity: 0 }} component='span'>
                    {linkName}
                </Box>
            </ListItemButton>
        </>
    );
};

export default CustomListItem;