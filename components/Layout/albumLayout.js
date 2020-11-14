
import { signOut } from 'actions';
import Router from 'next/router';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';
import CameraIcon from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles((theme) => ({
    appbar: {
        display: 'flex'
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    logout: {
        marginLeft: 'auto',
        display: 'flex',
        alignItems: 'center',
        color: '#fff',
    },
    iconLogout: {
        marginRight: '1rem'
    },

    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },

}));

const AlbumLayout = (props) => {

    const { title, className, children } = props;
    const classes = useStyles();
    const logoutHandler = () => {
        signOut().then(() => {
            localStorage.removeItem('myToken');
            Router.push('/');
        });
    };

    return (
        <div className={className}>
            <CssBaseline />
            <AppBar position="relative" >
                <Toolbar className={classes.appbar}>
                    <CameraIcon className={classes.icon} fontSize="large" />
                    <Typography variant="h3" color="inherit" noWrap >
                        {title}
                    </Typography>
                    <Button className={classes.logout} onClick={logoutHandler}>
                        <ExitToAppIcon className={classes.iconLogout} fontSize="large" />
                        <Typography variant="h4" color="inherit" noWrap >
                            로그아웃
                    </Typography>
                    </Button>
                </Toolbar>
            </AppBar>
            {children}
        </div>
    );

};

export default AlbumLayout;