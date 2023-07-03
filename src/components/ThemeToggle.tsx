"use client"

import { useTheme } from "next-themes";
import { useContext, useEffect, useState } from 'react';
import { MdDarkMode, MdWbSunny } from 'react-icons/md';
import { AlertContext } from "../../context/AlertContext";
import Button from "./Button";

const ThemeToggle = () => {
    const { showAlert } = useContext(AlertContext);

    const { systemTheme, theme, setTheme } = useTheme();

    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true)
    }, [])

    const themeChanger = () => {
        if (!mounted) return null;
        const currentTheme = theme === 'system' ? systemTheme : theme;
        if (currentTheme === 'dark') {
            return (
                <Button onClick={() => { setTheme('light'); showAlert("success", "light mode enabled") }} className="border border-gray-300 outline-none py-2 px-3 text-base rounded-md hover:bg-violet-700 hover:border-violet-400"><MdWbSunny className='text-lg text-yellow-500' title='Enable Light Mode' /></Button>
            )
        }
        else {
            return (
                <Button onClick={() => { setTheme('dark'); showAlert("success", "dark mode enabled") }} className="border border-gray-400 outline-none py-2 px-3 text-base rounded-md hover:bg-emerald-300 hover:border-emerald-400" ><MdDarkMode className='text-lg text-gray-900' title='Enable Dark Mode' /></Button>
            )
        }
    }
    return (
        <>
            {themeChanger()}
        </>
    )
}

export default ThemeToggle;