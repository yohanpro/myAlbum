
import axios from 'axios';

export const getAlbumData = async () => {
    const url = 'https://jsonplaceholder.typicode.com/albums';
    return axios.get(url).then(response => response.data);
};

export const deleteAlbum = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/albums/${id}`;
    return axios.delete(url).then(response => response.data);
};