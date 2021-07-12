import axios from "axios"
import {host} from "./../hostEndpoint"

const api = axios.create({
    baseURL:host
})

export default api