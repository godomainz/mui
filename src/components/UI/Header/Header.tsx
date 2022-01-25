import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ElevationScroll from '../ElevationScroll/ElevationScroll';

const Header = (props:any) => {
    return (
        <ElevationScroll {...props}>
            <AppBar position="fixed">
                <Toolbar>
                    Arc Development
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        
    );
};
export default Header;