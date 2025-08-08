'use client'

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react"


const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({children}) => {

    const [fontSize, setFontSize] = useState(16)
    const [fontFamily, setFontFamily] = useState('sans-serif')
    const [theme, setTheme] = useState('light')

    const pathname = usePathname();

    const themes = {
        light: {
        '--bg-color': '#ffffff',
        '--text-color': '#000000',
        '--accent-color': 'rgba(184, 230, 248, 0.885)',
        },
        dark: {
        '--bg-color': '#121212',
        '--text-color': '#e0e0e0',
        '--accent-color': '#4444aa',
        },
        contrast: {
        '--bg-color': '#000000',
        '--text-color': '#ffff00',
        '--accent-color': '#00ff00',
        },
    }


    useEffect(() => {
        const storedFontSize = parseInt(localStorage.getItem('fontSize')) || 16
        const storedFontFamily = localStorage.getItem('fontFamily') || 'sans-serif'
        const storedTheme = localStorage.getItem('theme') || 'light'
        setFontSize(storedFontSize)
        setFontFamily(storedFontFamily)
        setTheme(storedTheme)
    }, [])


    useEffect(() => {
        document.documentElement.style.setProperty('--dynamic-font-size', `${fontSize}px`)
        document.body.style.fontFamily = fontFamily
        localStorage.setItem('fontSize', fontSize)
        localStorage.setItem('fontFamily', fontFamily)

        // const currentTheme = themes[theme]
        // if (currentTheme) {
        // for (const [key, val] of Object.entries(currentTheme)) {
        //     document.documentElement.style.setProperty(key, val)
        // }
        // localStorage.setItem('theme', theme)
        // }
    }, [fontSize, fontFamily])


    useEffect(() => {
        const currentTheme = themes[theme];
        if (currentTheme) {
            for (const [key, val] of Object.entries(currentTheme)) {
                document.documentElement.style.setProperty(key, val);
            }

            localStorage.setItem('theme', theme);
        }
    }, [theme, pathname])

    return (
        <ThemeContext.Provider value={{ fontSize, setFontSize, fontFamily, setFontFamily, theme, setTheme }}>
        {children}
        </ThemeContext.Provider>
    )

}