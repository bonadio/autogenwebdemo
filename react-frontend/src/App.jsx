import Chat from './components/chat/layout/Chat';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/chat/layout/Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Chat/>
    </ThemeProvider>
  );
}

export default App;
