
import { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import { makeStyles } from '@material-ui/core/styles';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const useStyles = makeStyles((theme) => ({

    title: {
        color: 'red',
        '&>h2': {
            fontSize: '2.5rem',
            textAlign: 'center',
            fontWeight: 'bold',
            verticalAlign: 'middle',
            lineHeight: '4em'
        }
    },
    content: {
        fontSize: '2rem',
        "&>.bold": {
            fontWeight: 'bold'
        },

    },
    button: {
        fontSize: '2rem'
    }
}));

const DeleteModal = props => {
    const { open, targetAlbum, handleClose, handleCancel } = props;
    const classes = useStyles();


    return (
        <div>
            <Dialog
                open={open}
                keepMounted
                onClose={handleCancel}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle
                    id="alert-dialog-slide-title"
                    className={classes.title}

                >
                    정말로 삭제하시겠습니까?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" className={classes.content}>
                        <span className="bold">Title:</span> {targetAlbum?.title}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button className={classes.button} onClick={handleClose}
                        color="primary">
                        확인
                    </Button>
                    <Button className={classes.button} onClick={handleClose}
                        color="primary">
                        취소
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default DeleteModal;