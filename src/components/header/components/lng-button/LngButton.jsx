import React, { useRef, useState } from "react";
import { Button, ButtonGroup, Popper, SvgIcon, Grow, Paper, MenuList, MenuItem, Box } from "@mui/material";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import LanguageIcon from '@mui/icons-material/Language';
import { sxStylesLngButton } from "./lngButton.style";
import { useTranslation } from "react-i18next";
import "/node_modules/flag-icons/css/flag-icons.min.css";

const languages = [
    { code: 'pl', name: 'Polski', country_code: 'pl' },
    { code: 'en', name: 'English', country_code: 'gb' },
];

const LngButton = () => {

    const anchorRef = useRef(null);

    const { i18n } = useTranslation();

    const [open, setOpen] = useState(false);

    const handleMenuItemClick = (event, index, lngCode) => {
        i18n.changeLanguage(lngCode);
        setOpen(false);
    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        };
        setOpen(false);
    };

    return (
        <>
            <ButtonGroup variant="contained" ref={anchorRef} aria-label="language-buttons-group" sx={sxStylesLngButton.buttonGroup}  >
                <Button
                    size="small"
                    aria-controls={open ? 'split-button-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-label="select-lng-button"
                    aria-haspopup="menu"
                    onClick={handleToggle}
                >
                    <SvgIcon>
                        <LanguageIcon />
                    </SvgIcon>
                </Button>
            </ButtonGroup >
            <Popper
                sx={{
                    zIndex: 1,
                }}
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
            >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin:
                                placement === 'bottom' ? 'center top' : 'center bottom',
                        }}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList id="split-button-menu" autoFocusItem>
                                    {languages.map((lng, index) => (
                                        <MenuItem
                                            key={lng.country_code}
                                            selected={localStorage.getItem('i18nextLng') === lng.code}
                                            onClick={(event) => handleMenuItemClick(event, index, lng.code)}
                                        >
                                            <Box component='span' mr={0.5} className={`fi fi-${lng.country_code}`}></Box>
                                            <Box component='span'>
                                                {lng.name}
                                            </Box>
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </>
    );
};

export default LngButton;