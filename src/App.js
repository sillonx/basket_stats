import { useCookies } from 'react-cookie'
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Routes from './routes';
import LightTheme from './themes/Light';
import DarkTheme from './themes/Dark';
import Header from './pages/layouts/Header';
import Footer from './pages/layouts/Footer';

export default function App() {
    const [cookies] = useCookies(['mode']);
    return (
        <ThemeProvider theme={cookies?.mode === 'dark' ? DarkTheme : LightTheme}>
            <CssBaseline />
            <Header />
            <Routes />
            <Footer />
        </ThemeProvider>
    );
}