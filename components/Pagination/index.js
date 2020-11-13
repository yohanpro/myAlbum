
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

const AlbumPagination = props => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination count={10} color="primary" />
        </div>
    );
};

export default AlbumPagination;