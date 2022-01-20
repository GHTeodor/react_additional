import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const cat_Service = {
    getIMG: () => axiosService.get(urls?.cat).then(value => value.data)
};