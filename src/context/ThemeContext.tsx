'use client';

import { createContext, useContext, ReactNode } from 'react';

type Theme = {
    primary: string;
    accent1: string;
    accent2: string;
    accent3: string;
};

const defaultTheme: Theme = {
    primary: '#1563AC',
    accent1: '#DD2036',
    accent2: '#EC691F',
    accent3: '#1FA7E0',
};

const ThemeContext = createContext<Theme>(defaultTheme);

export function ThemeProvider({ children }: { children: ReactNode }) {
    return <ThemeContext.Provider value={defaultTheme}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    return useContext(ThemeContext);
}
