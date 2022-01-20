import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const girl_Service = {
    getIMG: () => axiosService.get(urls?.girl).then(value => value.data)
};