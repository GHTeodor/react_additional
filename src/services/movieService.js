import {axiosService} from "./axiosService";
import {urls} from "../configs/urls";

export const movieService = {
    getAll: (page, genre) => axiosService.get(urls.movies(page, genre)).then(value => value.data),
    getInfo: (id) => axiosService.get(urls.genres(id)).then(value => value.data)
}