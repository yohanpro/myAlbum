import { useState, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => { });

const AlbumPage = props => {
    const { id } = props;
    console.log("id", id);


    const classes = useStyles();


    return (
        <div className="container container-album__editor">

        </div>
    );
};

export default AlbumPage;


export async function getServerSideProps(context) {

    const { id } = context.query;


    return {
        props: { id },
    };

}