import { ThemeProvider, createTheme } from '@mui/material/styles';
import NavAppBar from './Components/Navbar';
import './App.css';
import HERO from './Components/HERO';
import { Container } from '@mui/material';
import Card from './Components/Card';
import TitlebarImageList from './Components/ImagesList';
import Footer from './Components/Footer';
import Order from './Components/Order';
import Offers from './Components/Offers';
import DownloadApp from './Components/Downloadapp';

const theme = createTheme({
  typography: {
    // fontFamily: 'Inter',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@keyframes bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <NavAppBar />
        <HERO />
        <Card></Card>
        <Order/>
        <TitlebarImageList></TitlebarImageList>
        <Offers/>
        <DownloadApp/>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
