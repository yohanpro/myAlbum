
import axios from 'axios';

export const getAlbumData = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/albums${id ? '/' + id : ''}`;
    return axios.get(url).then(response => response.data);
};

export const deleteAlbum = async (id) => {
    const url = `https://jsonplaceholder.typicode.com/albums/${id}`;
    return axios.delete(url).then(response => response.data);
};

export const saveAlbum = async (data, id) => {
    let url = `https://jsonplaceholder.typicode.com/albums`;
    // 수정
    if (id) {
        url = url + '/' + id;
        return axios.put(url, data)
            .then(response => response.data);
    } else {
        // 새로 생성시
        return axios.post(url, data)
            .then(response => response.data);
    }

};