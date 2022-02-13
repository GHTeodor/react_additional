import {axios_Services} from "./axios_Service";

export const photo_Service = {
    get1: (photo) => axios_Services.get(photo).then(response => response.request.responseURL)
        .catch(err => console.error(err))
};