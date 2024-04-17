import axios from 'axios'

// Set config defaults when creating the instance
export const bela = axios.create({
    baseURL: 'https://belasea.com'
    // baseURL: 'http://188.166.250.49'
});

export const BASE_URL = 'https://belasea.com';
// export const BASE_URL = 'http://188.166.250.49';