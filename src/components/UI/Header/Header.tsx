import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ElevationScroll from '../ElevationScroll/ElevationScroll';
import { Typography } from '@mui/material';
import { useStyles } from './Header.styles';

const Header = (props:any) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h3">Arc Development</Typography>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolBarMargin} />
        </React.Fragment>
    );
};
export default Header;