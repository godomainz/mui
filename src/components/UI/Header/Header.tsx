import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ElevationScroll from '../ElevationScroll/ElevationScroll';
import { Typography } from '@mui/material';

const Header = (props:any) => {
    return (
        <ElevationScroll {...props}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h3">Arc Development</Typography>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        
    );
};
export default Header;