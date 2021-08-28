import { DefaultTheme } from "@react-navigation/native"

export const colors = {
    white: '#fff',
    black: '#000',
    primary100: '#DDDDDD', // Light Gray
    primary100: '#909090', // Subtitles
    primary300: '#27272B', // Border Lines
    primary400: '#191C25', // Bottom Background
    primary500: '#18181C', // Main Background
    accent: '#5200FF',
    accentHover: '#575cf2',
    accentDisabled: '#9da0f5',
    accentTransparent: 'rgba(82,0,255,.29)'
}

export const fontSizes = {
    h1: 28,
    h2: 24,
    h3: 20,
    h4: 16,
    h5: 12
}

export const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.white,
        background: colors.white,
        border: 'transparent'
    }
}

export const darkTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        white: '#fff',
        black: '#000',
        primary100: '#DDDDDD', // Light Gray
        primary100: '#909090', // Subtitles
        primary300: '#27272B', // Border Lines
        primary400: '#191C25', // Bottom Background
        primary500: '#18181C', // Main Background
        accent: '#5200FF',
        accentHover: '#575cf2',
        accentDisabled: '#9da0f5',
        accentTransparent: 'rgba(82,0,255,.29)',
        background: '#18181C',
        border: 'transparent'
    }
}