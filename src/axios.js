import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-coffee-vending.firebaseio.com/'
});

export default instance;