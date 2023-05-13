import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../API/api";

export const fetchAuthMe = createAsyncThunk(
    'auth/fetchAuthMe',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('api/authentication/CheckAuthorization');
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue("При авторизации произошла ошибка.")
        }
    }
);