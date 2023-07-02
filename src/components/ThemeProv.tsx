"use client";

import { ThemeProvider } from 'next-themes';
import React from 'react';

const ThemeProv = ({
    children,
}: { children: React.ReactNode }) => {
    return (
        <div className='min-h-screen bg-white dark:bg-stone-900 w-full'>
            <ThemeProvider attribute='class'>
                {children}
            </ThemeProvider>
        </div>
    )
}

export default ThemeProv;