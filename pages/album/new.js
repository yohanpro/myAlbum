
import { useState, useEffect } from 'react';
import { saveAlbum } from 'actions/album';
import { makeStyles } from '@material-ui/core/styles';
import AlbumLayout from 'components/Layout/albumLayout';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classnames from 'classnames';
import Router from 'next/router';
import _ from 'lodash';

const useStyles = makeStyles((theme) => ({
    albumTitle: {
        marginTop: '5em',
        fontSize: '3em',
        '& input[name=albumTitle]': {
            fontSize: '3rem'
        },
        '& label': {
            fontSize: '1.7rem'
        }
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        height: '5vh',
        fontSize: '2rem',
        pointerEvents: 'unset',

        '&.disabled': {
            backgroundColor: 'gray',
            pointerEvents: 'none'
        }
    },
    btnContainer: {
        display: 'flex',
        marginTop: '5rem',
        marginLeft: '2rem',
        width: '50%',
        height: '5em',
        '&>button': {
            flexBasis: '20%',
            height: '100%',
            marginRight: '2rem'
        }
    }
}));
const NewAlbum = (props) => {

    const [title, setTitle] = useState();
    const [isBtnActive, setBtnState] = useState(false);
    const classes = useStyles();

    const saveHandler = () => {
        const albumData = {
            title
        };
        saveAlbum(albumData)
            .then(() => Router.push('/album'));
    };


    const inputHandler = (e) => {
        setTitle(e.target.value);
    };

    useEffect(() => {
        if (_.isEmpty(title)) {
            setBtnState(false);
        } else {
            setBtnState(true);
        }
    });

    return (
        <AlbumLayout
            title="New Album"
            className="container container-album__editor"
        >
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} >
                        <TextField
                            required
                            id="albumTitle"
                            name="albumTitle"
                            label="Album Title"
                            className={classes.albumTitle}
                            onChange={inputHandler}
                            fullWidth

                        />
                    </Grid>
                    <div className={classes.btnContainer}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classnames(classes.submit, { 'disabled': !isBtnActive })}
                            onClick={saveHandler}
                        >
                            확인
                    </Button>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => Router.push('/album')}
                        >
                            취소
                    </Button>
                    </div>
                </Grid>
            </Container>
        </AlbumLayout>
    );
};

export default NewAlbum;