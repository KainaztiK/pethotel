import React, {useEffect, useState} from 'react';
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import {Link, useParams} from "react-router-dom";
import image from "./img/image.svg"
import {useFetching} from "../Functions/hooks/useFetching";
import Api from "../../API/api";
import classes from "./Pets.module.scss"

const Hotelid = () => {

    const params = useParams();
    const [hotel, setHotel] = useState({});
// , isLoading, error
    const [fetchHotelById] = useFetching(async (id) => {
        const response = await Api.getHotel(params.id)
        setHotel(response.data)
    })

    useEffect(() => {
        fetchHotelById(params.id)
    },[])



    return (
        <div>
            <Header2/>
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
                            {hotel.cat && <div className={classes.animal}>Кошки</div>}
                            {hotel.dog && <div className={classes.animal}>Собаки</div>}
                            {hotel.rodent && <div className={classes.animal}>Грызуны</div>}
                            {hotel.other && <div className={classes.animal}>Другое</div>}
                        </div>
                        <div className="buttonMapPosition">
                            <button className="buttonMap">Карта ></button>
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
            <Footer/>
        </div>
    );
}

export default Hotelid;