import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const notebook_Service = {
    getIMG: () => axiosService.get(urls?.notebook).then(value => value.data)
};