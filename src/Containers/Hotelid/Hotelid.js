import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import image from "./img/image.svg"
import {useFetching} from "../Functions/hooks/useFetching";

const Hotelid = () => {

    const params = useParams();
    const [hotel, setHotel] = useState({});

    const [fetchHotelById] = useFetching(async (id) => {
        const response = await axios.get(`https://localhost:5001/api/hotels/advertisements/${id}`);
        setHotel(response.data);
    })
    
    useEffect(() => {
        fetchHotelById(params.id)
    }, [])

    const [pets, setPets] = useState({});

    return (
        <div>
            <div className="hotelID">
                <div className="aboutHotel">
                    <div className="leftBlockAboutHotel">
                        <Link to={"/Hotels"}><button className="backbtn"></button></Link>
                        <div className="imgHotelBlock">
                            <img src={image} className="imgHotel" alt="photoHotel"/>
                        </div>
                        <div>
                            {/* Кнопки просмотра фото*/}
                        </div>
                        
                        <div className="HotelTxt">
                            Адрес: {hotel.address}
                        </div>
                        <div className="petsActive">

                        </div>
                        <div className="buttonMapPosition">
                            <button className="buttonMap">Карта</button>
                        </div>
                        <div className="btnOrderBlock">
                            <button className="btnOrder">Заказать</button>
                        </div>
                    </div>

                    <div className="rightBlockAboutHotel">
                        <div className="AboutHotelText">
                            {hotel.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hotelid;