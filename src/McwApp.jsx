import React, { useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './config/theme/theme';
import { ThemeStateContext } from './contexts/theme-context/themeContext';
import MainLayout from './components/main-layout/MainLayout';

const McwApp = () => {

    const [selectedTheme, setSelectedTheme] = useState(false);
    const themeStateProviderValue = useMemo(() => ({ selectedTheme, setSelectedTheme }), [selectedTheme, setSelectedTheme]);

    return (
        <>
            <ThemeStateContext.Provider value={themeStateProviderValue}>
                <ThemeProvider theme={selectedTheme ? darkTheme : lightTheme}>
                    <CssBaseline />
                    <MainLayout>
                        
                    </MainLayout>
                </ThemeProvider>
            </ThemeStateContext.Provider>
        </>
    );
};

export default McwApp;
