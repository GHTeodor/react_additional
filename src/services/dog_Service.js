import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const dog_Service = {
    getIMG: () => axiosService.get(urls?.dog).then(value => value.data)
};