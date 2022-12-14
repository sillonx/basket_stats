import { createTheme } from '@mui/material/styles';

const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        common: {
            black: '#000000',
            white: '#FFFFFF',
            grey: '#808080'
        },
        primary: {
            main: '#f36b1e'
        },
        secondary: {
            main: '#9B1FD8'
        },
        error: {
            main: '#ED1616'
        },
        warning: {
            main: '#FF9E1B'
        },
        info: {
            main: '#167BDF'
        },
        success: {
            main: '#57DA23'
        },
        text: {
            primary: '#ffffff',
            secondary: 'rgba(255,255,255,0.6)'
        },
        background: {
            default: '#404040',
            paper: '#404040'
        },
        link: {
            main: '#2C3EF2',
            visited: '#9B1FD8'
        }
    },
    typography: {
        fontFamily: 'Arial',
        fontSize: 14
    },
})

export default DarkTheme;