import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ElevationScroll from '../ElevationScroll/ElevationScroll';
import { useStyles } from './Header.styles';
import logo from '../../../assets/logo.svg';

const Header = (props:any) => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <ElevationScroll {...props}>
                <AppBar position="fixed">
                    <Toolbar disableGutters>
                        <img  alt="company logo" className={classes.logo} src={logo}/>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolBarMargin} />
        </React.Fragment>
    );
};
export default Header;