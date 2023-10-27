import axios from 'axios';
// import { getEnvVariables } from '../helpers';
import { getEnvVariables } from '../heroes/helpers/index'

const { VITE_API_URL } = getEnvVariables




const frutyfenixApi = axios.create({
    baseURL: VITE_API_URL
});

// Todo: configurar interceptores
frutyfenixApi.interceptors.request.use( config => { 

    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }

    return config;
})


export default frutyfenixApi;


