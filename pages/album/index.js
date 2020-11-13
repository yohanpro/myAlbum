import { getAlbumData } from 'actions/album';
import AlbumPagination from 'components/Pagination';
import { useState, useEffect } from 'react';
import Albums from 'components/Album';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';


const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    btnDelete: {
        backgroundColor: '#f48fb1',
        color: 'black',
    }
}));

const AlbumPage = props => {
    const { albums } = props;


    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [albumsPerPage] = useState(5);


    const indexOfLastAlbum = currentPage * albumsPerPage;
    const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
    const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);


    const paginate = pageNumber => setCurrentPage(pageNumber);

    const classes = useStyles();

    return (
        <div className="container container-album">
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon} fontSize="large" />
                    <Typography variant="h3" color="inherit" noWrap >
                        Album Page
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.cardGrid} maxWidth="md">
                <Albums
                    albums={currentAlbums}
                    classes={classes}
                />
            </Container>
            <AlbumPagination
                albumsPerPage={albumsPerPage}
                totalAlbums={albums.length}
                paginate={paginate}
            />
        </div>
    );
};

export default AlbumPage;

export async function getStaticProps(context) {
    let albums = [];
    try {
        albums = await getAlbumData();
    } catch (e) {
        console.log(e);
    }
    return {
        props: { albums },
    };
}