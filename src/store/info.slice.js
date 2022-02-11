import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../services/movieService";


export const getInfoThunk = createAsyncThunk(
    'infoSlice/getInfoThunk',
    async (id, {rejectWithValue}) => {
        try {
            return await movieService.getInfo(id);
        } catch (e) {
            return rejectWithValue(e.message);
        }
    }
);

const infoSlice = createSlice({
    name: 'infoSlice',
    initialState: {
        movieInfo: {},
        status: null,
        error: null
    },
    extraReducers: {
        [getInfoThunk.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.movieInfo = action.payload;
        },
        [getInfoThunk.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.movieInfo = action.payload;
        },
        [getInfoThunk.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
});

const infoReducer = infoSlice.reducer;

export default infoReducer;