import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const characters_Service = {
    // getAll: () => axiosService.get(urls?.characters).then(value => value.data),
    get1Char: (id) => axiosService.get(urls?.characters + "/" + id).then(value => value.data)
};