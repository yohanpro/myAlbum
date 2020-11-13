

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { shortenText } from 'helpers/utils';


const Albums = props => {
    const { albums, classes, loading } = props;

    return (
        <>
            <Grid container spacing={4}>
                {albums.map((card) => (
                    <Grid item key={card.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://via.placeholder.com/200x100.png?text=Travel+Flan"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Title :  {shortenText(card.title, 25)}
                                </Typography>

                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="contained"
                                    size="small"
                                    color="primary"
                                    startIcon={<EditIcon />}
                                >
                                    <Typography
                                        variant="h5"
                                        color="inherit">
                                        수정
                                    </Typography>
                                </Button>
                                <Button
                                    variant="contained"
                                    size="small"
                                    color="secondary"
                                    className={classes.btnDelete}
                                    startIcon={<DeleteIcon />}
                                >
                                    <Typography
                                        variant="h5"
                                        color="inherit">
                                        삭제
                                    </Typography>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </>
    );
};

export default Albums;