import {axios_Services} from "./axios_Service";
import {urls} from "../urls/urls";

export const notebook_Service = {
    get1: () => axios_Services.get(urls?.notebook, {responseType: 'blob'})
};