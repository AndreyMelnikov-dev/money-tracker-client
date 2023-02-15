import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    withCredentials: true,
});

instance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default instance