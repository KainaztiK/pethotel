import axios from "axios";

export default class Api{
    static async getHotels(){
        const response = await axios.get('https://localhost:5001/api/hotels/advertisements/')
        return response;
    }
    static async getHotel(id){
        const response = await axios.get(`https://localhost:5001/api/hotels/advertisements/${id}`)
        return response;
    }
}
