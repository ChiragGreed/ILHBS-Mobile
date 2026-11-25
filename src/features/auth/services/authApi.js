import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.0.2.2:5173/api/auth',
    withCredentials: true,
});

export const airlineLoginApi = async (username, password) => {
    const response = await api.post('/airline/login', { username, password }, {
        headers: {
            'Origin': 'http://localhost:5173',
            'Content-Type': 'application/json',
            'x-calling-app-request': '1'
        }
    });
    console.log('response Data', response);
    return response.data;

}