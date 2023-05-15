import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import image from "./img/image.svg"
import {useFetching} from "../Functions/hooks/useFetching";
import ReactMarkdown from "react-markdown";
import MapBlock from "../Components/Maps/Maps"

const Hotelid = () => {

    const params = useParams();
    const [hotel, setHotel] = useState({});
    const [ModalActive, setModalActive] = useState(true);

    const [fetchHotelById] = useFetching(async (id) => {
        const response = await axios.get(`https://localhost:5001/api/hotels/advertisements/${id}`);
        setHotel(response.data);
        setCat(response.data.cat);
        setDog(response.data.dog);
        setRodent(response.data.rodent);
        setOther(response.data.other);
    })
    const[Cat, setCat]=useState(false)
    const[Dog, setDog]=useState(false)
    const[Rodent, setRodent]=useState(false)
    const[Other, setOther]=useState(false)
    useEffect(() => {
        fetchHotelById(params.id)
    }, [])
    

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
                            Адрес: {hotel.address}
                        </div>
                        <div className="petsActive">
                            {Cat && <div className="pet">Кошки</div>}
                            {Dog && <div className="pet">Собаки</div>}
                            {Rodent && <div className="pet">Грызуны</div>}
                            {Other && <div className="pet">Другое</div>}
                        </div>
                        <div className="buttonMapPosition">
                            <button className="buttonMap" onClick={() => setModalActive(true)}>Карта</button>
                            <MapBlock active={ModalActive} setActive={setModalActive}>
                                <p>sdfdsfsdafsdfdad</p>
                            </MapBlock>
                        </div>
                        <div className="btnOrderBlock">
                            <button className="btnOrder">Заказать</button>
                        </div>
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