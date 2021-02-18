import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-app-67e20-default-rtdb.firebaseio.com/'
});

export default instance;