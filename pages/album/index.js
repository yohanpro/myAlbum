import { useState } from 'react';
import { getAlbumData } from 'actions/album';
import AlbumPagination from 'components/Pagination';
import Albums from 'components/Album';
import AlbumLayout from 'components/Layout/albumLayout';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Router from 'next/router';

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
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(4),
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
        backgroundColor: 'red',
        color: '#fff',
    },
    newAlbum: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '3rem',
        cursor: 'pointer'
    },
    btnAddAlbum: {
        marginRight: '1rem'
    }
}));

const AlbumPage = props => {
    const { albums } = props;
    const [currentPage, setCurrentPage] = useState(1);
    const [albumsPerPage] = useState(5);


    const indexOfLastAlbum = currentPage * albumsPerPage;
    const indexOfFirstAlbum = indexOfLastAlbum - albumsPerPage;
    const currentAlbums = albums.slice(indexOfFirstAlbum, indexOfLastAlbum);


    const paginate = pageNumber => setCurrentPage(pageNumber);

    const classes = useStyles();



    return (
        <AlbumLayout title="Album Page" className="container container-album">
            <Container maxWidth="md">
                <div className={classes.newAlbum} onClick={() => Router.push('/album/new')}>
                    <AddCircleIcon fontSize="large" className={classes.btnAddAlbum} />
                    <Typography variant="h3" component="h2">
                        앨범 추가하기
                    </Typography>
                </div>
            </Container>
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
        </AlbumLayout>
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