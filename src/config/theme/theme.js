import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#00C9B7',
            light: '#00fbe5',
            dark: '#00a192',
            contrastText: '#ffffff'
        }
    },
    typography: {
        fontFamily: ['Lato', 'sans-serif'].join(',')
    }
});