import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../API/api";

export const fetchAuth = createAsyncThunk(
    'auth/fetchAuth',
    async (params, thunkAPI) => {
        try {
            const { data } = await axios.post('api/authentication/login', params);
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue("При авторизации произошла ошибка.")
        }
    }
);

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

export const fetchRegister = createAsyncThunk(
    'auth/fetchRegister',
    async (params, thunkAPI) => {
        try {
            const { data } = await axios.post('api/authentication/registrationUser', params);
            console.log(data);
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue("При регистрации произошла ошибка.")
        }
    }
);