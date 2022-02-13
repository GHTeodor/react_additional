import axios from "axios";

import baseURL from "../urls/urls";

export const axios_Services = axios.create({baseURL});