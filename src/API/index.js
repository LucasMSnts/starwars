import axios from 'axios'

const route = 'https://swapi.co/api/'
const API = axios.create({
    baseURL: route
})

export default API