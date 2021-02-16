import axois from 'axios';

const instance = axois.create({
    baseURL: 'https://burger-app-67e20-default-rtdb.firebaseio.com/'
})

export default instance;