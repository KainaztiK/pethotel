import React, {useEffect, useState} from 'react';
import '../Common.scss';
import logoHotels from "./img/logo.svg"
import {useNavigate} from "react-router-dom";
import { Categories } from '../Components/Categories/Categories';
import Loader from "../Components/Loader/Loader";
import axios from "axios";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";
import Axios from "../../API/api";

function Hotels(){
    const [hotels, setHotels] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    const router = useNavigate()
    const isUserAuth = useSelector(isAuth);
    useEffect( () => {
        setIsLoading(true);
        async function fetchHotels(){
            const response = await Axios.get('api/hotels/advertisements/');
            setHotels(response.data);
            setIsLoading(false);
        } 
        if(window.localStorage.getItem("role")==="User")
        {
            router("/hotels");
        }
        if(window.localStorage.getItem("role")==="Companyy")
        {
            router("/hotels");
        }
        if(!window.localStorage.getItem("token"))
        {
            router("/");
        }
        fetchHotels();
    }, [isUserAuth, router]);
    

    const arr = hotels.map((data) => {
        return(
            <div onClick={() => router(`/hotel/${data.advertisementId}`)} className="hotels" key={data.advertisementId}>

                <div className="leftBlockHotels">

                </div>
                <div className="rightBlockHotels">
                    <h3 className="h3nameHotel">{data.name}</h3>
                    <h4 className="h4sityHotel">{data.city}</h4>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="blockBackBasicWindow">
                <div className="blockBasicWindow">
                    {/*IMG LOGO*/}
                    <div className="ImgLogoBasicWindow">
                        <img src={logoHotels} className="logoBasicWindow" alt="logo"/>
                    </div >
                    {/*Pet Choose*/}
                    <div className="petChoose">
                        <Categories value={categoryId} onChangeCategory={(i)=>setCategoryId(i)}/>
                    </div>
                    {/*Text Hotelid*/}
                    <div className="textPopularHotel">
                        Популярные отели
                    </div>
                    {/*Main Hotels*/}
                    {isLoading
                        ? <Loader/>
                        : <div className="BlockHotels">{arr}</div>
                    }

                </div>
            </div>
        </div>
    );
}

export default Hotels;
