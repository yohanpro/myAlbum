
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        fontSize: '3rem',
        position: 'relative',
        margin: '0 auto',
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
    pagination: {
        justifyContent: 'center',
        display: 'flex',
        marginBottom: '1rem'
    }

}));

const AlbumPagination = props => {

    const classes = useStyles();

    const pageNumbers = [];
    const { totalAlbums, albumsPerPage, paginate } = props;

    for (let i = 1; i <= Math.ceil(totalAlbums / albumsPerPage); i++) {
        pageNumbers.push(i);
    }

    const paginationHandler = (event, page) => {
        paginate(page);
    };

    return (
        <div className={classes.root}>
            <Pagination
                className={classes.pagination}
                count={pageNumbers.length}
                color="primary"
                size="large"
                onChange={paginationHandler}
            />
        </div>
    );
};

export default AlbumPagination;