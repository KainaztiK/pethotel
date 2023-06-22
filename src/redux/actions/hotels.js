import { createAsyncThunk } from "@reduxjs/toolkit";
import Axios from "../../API/api";

export const fetchHotels = createAsyncThunk(
    'posts/fetchHotels',
    async (_, thunkAPI) => {
        try {
            const { data } = await Axios.get(`/api/hotels/advertisements`);
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue("При загрузке постов произошла ошибка.")
        }
    }
); // TODO Сохранить текст ошибок в redux, как-то отобразить их пользователю.


export const fetchHotelById = createAsyncThunk(
    'posts/fetchHotelById',
    async (advertisementId, thunkAPI) => {
        try {
            const { data } = await Axios.get(`/api/hotels/advertisements/${advertisementId}`);
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue("При загрузке статьи произошла ошибка.")
        }
    }
); // TODO Сохранить текст ошибок в redux, как-то отобразить их пользователю.