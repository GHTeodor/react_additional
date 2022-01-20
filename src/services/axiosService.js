import baseURL from "../configs/urls";

import axios from "axios";


export const axiosService = axios.create({baseURL});