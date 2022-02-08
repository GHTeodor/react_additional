import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const genresService = {
    getAll: () => axiosService.get(urls.allGenres).then(value => value.data)
};