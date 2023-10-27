
import { useState, useEffect } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Navigator from './Navigator';
import Header1 from './Header1';
import { useTheme } from '@mui/material/styles';
import ChatDialog from "./ChatDialog"
import { useBoundStore } from '../../../stores';

const drawerWidth = 256;

export default function Chat() {
    const theme = useTheme()
    const [mobileOpen, setMobileOpen] = useState(false);
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
    const clearChatMessages = useBoundStore((state) => state.clearChatMessages)
    // const startChat = useBoundStore((state) => state.startChat)

    // const isObjectEmpty = (objectName) => {
    //     return Object.keys(objectName).length === 0
    // }

    useEffect(() => {
        clearChatMessages()
        // startChat()
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
      <Box sx={{ display: 'flex', minHeight: '100vh' }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Navigator
              PaperProps={{ style: { width: drawerWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}

          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { sm: 'block', xs: 'none' } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <Header1 onDrawerToggle={handleDrawerToggle} />
          <ChatDialog />
        </Box>
      </Box>
  );
}