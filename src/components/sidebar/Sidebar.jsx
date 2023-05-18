import React from "react";
import { Box, IconButton, List, ListItemButton } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import WalletIcon from '@mui/icons-material/Wallet';
import BookIcon from '@mui/icons-material/Book';
import PaidIcon from '@mui/icons-material/Paid';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { sxStylesSidebar } from "./sidebar.style";
import CustomListItem from "./components/CustomListItem";

const Sidebar = (props) => {

    const { hideNav, setHideNav } = props;

    const handleHideNav = () => {
        setHideNav(!hideNav);
    };

    return (
        <>
            <Box sx={!hideNav ? sxStylesSidebar.navSidebar : { ...sxStylesSidebar.navSidebar, width: '60px' }} >
                <Box sx={!hideNav ? sxStylesSidebar.navButtonContainer : { ...sxStylesSidebar.navButtonContainer, justifyContent: 'center' }}>
                    <IconButton onClick={() => handleHideNav()}>
                        <KeyboardDoubleArrowLeftIcon sx={hideNav ? { ...sxStylesSidebar.navButton, transform: 'rotate(180deg)' } : sxStylesSidebar.navButton} />
                    </IconButton>
                </Box>
                <List component="nav" aria-labelledby="nested-list-subheader">
                    <CustomListItem hideNav={hideNav} linkName={'Podsumowanie'}>
                        <DashboardIcon sx={sxStylesSidebar.listItemIcon} />
                    </CustomListItem>

                    <CustomListItem hideNav={hideNav} linkName={'Finanse'}>
                        <ShowChartIcon sx={sxStylesSidebar.listItemIcon} />
                    </CustomListItem>

                    <CustomListItem hideNav={hideNav} linkName={'Portfele'}>
                        <WalletIcon sx={sxStylesSidebar.listItemIcon} />
                    </CustomListItem>

                    <CustomListItem hideNav={hideNav} linkName={'Planer'}>
                        <BookIcon sx={sxStylesSidebar.listItemIcon} />
                    </CustomListItem>

                    <CustomListItem hideNav={hideNav} linkName={'Opłaty'}>
                        <PaidIcon sx={sxStylesSidebar.listItemIcon} />
                    </CustomListItem>
                </List>
            </Box>
        </>
    );
};

export default Sidebar;
