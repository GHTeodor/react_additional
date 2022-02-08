import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../services/genresService";


export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            return await genresService.getAll();
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

export const addGenreThunk = createAsyncThunk(
    'genresSlice/addGenreThunk',
    async (genre, {dispatch}) => {
        try {
            dispatch(addGenre(genre));
        } catch (e) {
            console.error('=======addGenreThunk\n', e);
        }
    }
);


const genresSlice = createSlice({
    name: 'genresSlice',
    initialState: {
        genres: [],
        status: null,
        error: null,
        genre: null
    },
    reducers: {
        addGenre: (state, action) => {
            state.genre = action.payload;
        }
    },

    extraReducers: {
        [getAllGenres.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [getAllGenres.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.genres = action.payload;
        },
        [getAllGenres.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const genresReducer = genresSlice.reducer;

export const {addGenre} = genresSlice.actions;

export default genresReducer;