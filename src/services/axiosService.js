import axios from "axios";


export const axiosService = {get: (url) => axios.get(url).then(value => value.data)};