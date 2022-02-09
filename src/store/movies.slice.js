import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services/movieService";


export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async ({page, genre}, {rejectWithValue}) => {
        try {
            return await movieService.getAll(page, genre);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const changePageThunk = createAsyncThunk(
    'moviesSlice/changePageThunk',
    async (page, {dispatch}) => {
        try {
            dispatch(changePage(page));
        } catch (e) {
            console.error('=======changePageThunk\n', e);
        }
    }
);

export const firstPageThunk = createAsyncThunk(
    'moviesSlice/firstPageThunk',
    async (page, {dispatch}) => {
        try {
            dispatch(firstPage(page));
        } catch (e) {
            console.error('=======changePageThunk\n', e);
        }
    }
);

export const buttonPageThunk = createAsyncThunk(
    'moviesSlice/changePageThunk',
    async (page, {dispatch}) => {
        try {
            dispatch(changeButtonPage(page));
        } catch (e) {
            console.error('=======buttonPageThunk\n', e);
        }
    }
);

export const darkThemeThunk = createAsyncThunk(
    'moviesSlice/darkThemeThunk',
    async (darkMode, {dispatch}) => {
        try {
            dispatch(darkTheme(darkMode));
        } catch (e) {
            console.error('=======darkThemeThunk\n', e);
        }
    }
);


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState: {
        movies: [],
        status: null,
        error: null,
        page: 1,
        darkMode: false
    },
    reducers: {
        changePage: (state, action) => {
            if ((action.payload === -1 && state.page !== 1) || (action.payload === 1 && state.page !== 500)) {
                state.page += action.payload;
            }
        },
        changeButtonPage: (state, action) => {
            state.page = action.payload;
        },
        darkTheme: (state, action) => {
            state.darkMode = action.payload
        },
        firstPage: (state, action) => {
            state.page = action.payload;
        }
    },

    extraReducers: {
        [getAllMovies.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAllMovies.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.movies = action.payload;
        },
        [getAllMovies.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const moviesReducer = moviesSlice.reducer;

export const {changePage, firstPage, changeButtonPage, darkTheme} = moviesSlice.actions;

export default moviesReducer;