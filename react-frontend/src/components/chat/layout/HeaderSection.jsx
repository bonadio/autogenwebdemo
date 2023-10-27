import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom';
import {
    useNavigate,
    useLocation
  } from 'react-router-dom';

const lightColor = 'rgba(255, 255, 255, 0.7)';

function LinkTab(props) {
    const navigate = useNavigate();
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
          navigate(props.href)
        }}
        {...props}
      />
    );
  }


function HeaderSection(props) {
    const tabs = props.tabs
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
    return (
        <React.Fragment>
        <AppBar
            component="div"
            color="primary"
            position="static"
            elevation={0}
            sx={{ zIndex: 0 }}
        >
            <Toolbar>
            <Grid container alignItems="center" spacing={1}>
                <Grid item xs>
                <Typography color="inherit" variant="h5" component="h1">
                    {tabs.sectionName}
                </Typography>
                </Grid>
                <Grid item>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
            </Toolbar>
        </AppBar>
        <AppBar component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
            <Tabs value={value}  onChange={handleChange} textColor="inherit">
            {tabs.sectionTabs.map(({ id, name, path }) => (
                <LinkTab key={id} label={name} href={path}/>
            ))}
            </Tabs>
        </AppBar>
        <Box component="main" sx={{ flex: 1, py: 3, px: 3, bgcolor: '#eaeff1' }}>
            <Outlet />
        </Box>

        </React.Fragment>
    );
}


export default HeaderSection;