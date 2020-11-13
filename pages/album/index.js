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
}));

const AlbumPage = props => {
    const { albums } = props;

    const [posts, setPosts] = useState(albums);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


    const paginate = pageNumber => setCurrentPage(pageNumber);

    const classes = useStyles();
    return (
        <div className="container">
            <AppBar position="relative">
                <Toolbar>
                    <CameraIcon className={classes.icon} />
                    <Typography variant="h6" color="inherit" noWrap>
                        Album Page
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.cardGrid} maxWidth="md">
                <Albums
                    albums={currentPosts}
                    classes={classes}
                    loading={loading}
                />
            </Container>
            <AlbumPagination
                postsPerPage={postsPerPage}
                totalPosts={posts.length}
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
        props: { albums }, // will be passed to the page component as props
    };
}