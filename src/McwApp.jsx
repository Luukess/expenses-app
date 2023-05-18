import React, { useMemo, useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from './config/theme/theme';
import { ThemeStateContext } from './contexts/theme-context/themeContext';
import MainLayout from './components/main-layout/MainLayout';
import { AuthContext } from './contexts/auth-context/authContext';
import { useAuth } from './hooks/auth-hook/authHook';

const McwApp = () => {

    const [selectedTheme, setSelectedTheme] = useState(false);
    const themeStateProviderValue = useMemo(() => ({ selectedTheme, setSelectedTheme }), [selectedTheme, setSelectedTheme]);

    const auth = useAuth();

    return (
        <>
            <ThemeStateContext.Provider value={themeStateProviderValue}>
                <ThemeProvider theme={selectedTheme ? darkTheme : lightTheme}>
                    <AuthContext.Provider value={auth}>
                        <CssBaseline />
                        <MainLayout>

                        </MainLayout>
                    </AuthContext.Provider>
                </ThemeProvider>
            </ThemeStateContext.Provider>
        </>
    );
};

export default McwApp;
