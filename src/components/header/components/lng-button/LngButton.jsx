import React, { useRef, useState } from "react";
import { Button, ButtonGroup, Popper, SvgIcon, Grow, Paper, MenuList, MenuItem, useTheme } from "@mui/material";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import LanguageIcon from '@mui/icons-material/Language';
import { sxStylesLngButton } from "./lngButton.style";
const options = ['pl', 'en'];
const LngButton = () => {

    const anchorRef = useRef(null);
    const theme = useTheme();

    const [open, setOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
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
                                    {options.map((option, index) => (
                                        <MenuItem
                                            key={option}
                                            selected={index === selectedIndex}
                                            onClick={(event) => handleMenuItemClick(event, index)}
                                        >
                                            {option}
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