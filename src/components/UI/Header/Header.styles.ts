import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme:Theme) => ({
    toolBarMargin: {
        ...theme.mixins.toolbar
    }
}));