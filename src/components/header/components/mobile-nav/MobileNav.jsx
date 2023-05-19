import React, { useState } from "react";
import { Drawer, IconButton, Box, Typography, List, ListItemButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WalletIcon from '@mui/icons-material/Wallet';
import BookIcon from '@mui/icons-material/Book';
import PaidIcon from '@mui/icons-material/Paid';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import { sxStylesMobileNav } from "./mobileNav.style";

const MobileNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenNav = () => setIsOpen(true);

    return (
        <>
            <Box component='div' sx={sxStylesMobileNav.navMainContainer}>
                <Box component='div'>
                    <IconButton onClick={handleOpenNav}>
                        <MenuIcon />
                    </IconButton>
                </Box>
                <Drawer
                    anchor="left"
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                >
                    <Box component='div' sx={sxStylesMobileNav.navBody}>
                        <Box component='div' sx={sxStylesMobileNav.navBodyLogo}>
                            <Typography sx={{ fontSize: '20px' }}>
                                MyCoinWallet
                            </Typography>
                        </Box>
                        <List component='nav'>
                            <ListItemButton onClick={() => { setIsOpen(false) }} sx={sxStylesMobileNav.navListItemButton}>
                                <DashboardIcon sx={sxStylesMobileNav.listItemIcon} /> Podsumowanie
                            </ListItemButton>

                            <ListItemButton onClick={() => { setIsOpen(false) }} sx={sxStylesMobileNav.navListItemButton}>
                                <ShowChartIcon sx={sxStylesMobileNav.listItemIcon} /> Finanse
                            </ListItemButton>

                            <ListItemButton onClick={() => { setIsOpen(false) }} sx={sxStylesMobileNav.navListItemButton}>
                                <WalletIcon sx={sxStylesMobileNav.listItemIcon} /> Portfele
                            </ListItemButton>

                            <ListItemButton onClick={() => { setIsOpen(false) }} sx={sxStylesMobileNav.navListItemButton}>
                                <BookIcon sx={sxStylesMobileNav.listItemIcon} /> Planer
                            </ListItemButton>

                            <ListItemButton onClick={() => { setIsOpen(false) }} sx={sxStylesMobileNav.navListItemButton}>
                                <PaidIcon sx={sxStylesMobileNav.listItemIcon} /> Opłaty
                            </ListItemButton>
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </>
    );
};

export default MobileNav;