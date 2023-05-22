import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#fe347e',
            light: '#fe80ae',
            dark: '#f4015a',
            contrastText: '#ffffff'
        }
    },
    typography: {
        fontFamily: ['Lato', 'sans-serif'].join(',')
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