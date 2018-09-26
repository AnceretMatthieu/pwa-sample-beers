import axios from 'axios'

export const HTTP = axios.create({
    baseURL: 'https://api.punkapi.com/v2/'
})