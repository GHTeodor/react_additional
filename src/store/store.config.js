import {configureStore} from "@reduxjs/toolkit";

import moviesReducer from "./movies.slice";
import genresReducer from "./genres.slice";
import infoReducer from "./info.slice";


const store = configureStore({
    reducer: {
        moviesReducer,
        genresReducer,
        infoReducer
    }
});

export default store;