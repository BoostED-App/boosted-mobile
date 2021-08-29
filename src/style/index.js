import { DefaultTheme } from "@react-navigation/native"

export const colors = {
    white: '#fff',
    black: '#000',
    primary100: '#DDDDDD', // Light Gray
    primary200: '#909090', // Subtitles
    primary300: '#27272B', // Border Lines
    primary400: '#191C25', // Bottom Background
    primary500: '#18181C', // Main Background
    accent: '#5200FF',
    accentHover: '#575cf2',
    accentDisabled: '#9da0f5',
    accentTransparent: 'rgba(82,0,255,.50)',
    
    landing: {
        primary: '#080D29',
        accent100: '#ffffff',
        accent200: '#F6F6F6',
        accent300: '#ECECEC'
    }
}

export const fontSizes = {
    h1: 30,
    h2: 26,
    h3: 22,
    h4: 18,
    h5: 14
}

export const lightTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#fff',
        background: '#fff',
        border: 'transparent'
    }
}

export const darkTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#18181C',
        border: 'transparent'
    }
}

export const screenContainer = {
    marginTop: 25
}