import Axios from 'axios';

export const axios = Axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Client-ID hK-xahUyfAARq56HfEpoKim0zwEd2q_DrHHkUJbW6bw'
    }
});