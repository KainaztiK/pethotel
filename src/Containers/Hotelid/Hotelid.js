import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams, useNavigate} from "react-router-dom";
import image from "./img/image.svg"
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";

const Hotelid = () => {
    const params = useParams();
    const router = useNavigate()
    const isUserAuth = useSelector(isAuth);
    const [hotel, setHotel] = useState({});
    const[Cat, setCat]=useState(false)
    const[Dog, setDog]=useState(false)
    const[Rodent, setRodent]=useState(false)
    const[Other, setOther]=useState(false)
    useEffect(() => {
        async function fetchHotelById() {
            const response = await axios.get(`https://localhost:5001/api/hotels/advertisements/${params.id}`);
            setHotel(response.data);
            setCat(response.data.cat);
            setDog(response.data.dog);
            setRodent(response.data.rodent);
            setOther(response.data.other);
        };
        
        fetchHotelById(params.id);
        if(window.localStorage.getItem("role")==="User")
        {
            router(`/hotel/${params.id}`);
        }
        if(window.localStorage.getItem("role")==="Companyy")
        {
            router("/posts");
        }
        if(!window.localStorage.getItem("token"))
        {
            router("/");
        }
    }, [isUserAuth, router, params.id])


    
    return (
        <div>
            <div className="hotelID">
                <div className="aboutHotel">
                    <div className="leftBlockAboutHotel">
                        <Link to={"/hotels"}><button className="backbtn"></button></Link>
                        <div className="imgHotelBlock">
                            <img src={image} className="imgHotel" alt="photoHotel"/>
                        </div>
                        <div>
                            {/* Кнопки просмотра фото*/}
                        </div>
                        
                        <div className="HotelTxt">
                            Адрес: {hotel.city} , {hotel.address}

                        </div>
                        <div className="petsActive">
                            {Cat && <div className="pet">Кошки</div>}
                            {Dog && <div className="pet">Собаки</div>}
                            {Rodent && <div className="pet">Грызуны</div>}
                            {Other && <div className="pet">Другое</div>}
                        </div>
                        {/* <div className="buttonMapPosition">
                            <button className="buttonMap">Карта</button>
                        </div>
                        <div className="btnOrderBlock">
                            <button className="btnOrder">Заказать</button>
                        </div> */}
                    </div>

                    <div className="rightBlockAboutHotel">
                        <div className="AboutHotelText">
                            <ReactMarkdown children={hotel.description} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hotelid;