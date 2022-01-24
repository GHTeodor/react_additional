import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const episodes_Service = {
    // getAll: () => axiosService.get(urls?.episodes).then(value => value.data),
    getPage: (num) => axiosService.get(`${urls?.episodes}?page=${num}`).then(value => value.data)
};