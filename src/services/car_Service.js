import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const car_Service = {
    getIMG: () => axiosService.get(urls?.car).then(value => value.data)
};