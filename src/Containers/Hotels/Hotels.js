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
            const response = await axios.get('https://localhost:5001/api/hotels/advertisements/');
            setHotels(response.data);
            setIsLoading(false);
        } 
        if(window.localStorage.getItem("role")==="User")
        {
            router("/hotels");
        }
        if(window.localStorage.getItem("role")==="Companyy")
        {
            router("/posts");
        }
        if(!window.localStorage.getItem("token"))
        {
            router("/");
        }
        fetchHotels();
    }, [isUserAuth, router]);
    
    const [userInfo, setUserInfo] = useState('');
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const response = await Axios.get('api/authentication/CheckAuthorization');
                if (response.data && response.data.userId) {
                    setUserInfo(response.data);
                } else {
                    throw new Error("Invalid user ID format");
                }
            } catch (error) {
                console.error("Error fetching user info:", error);
            }
        };
    
        const role = window.localStorage.getItem("role");
        const token = window.localStorage.getItem("token");
        if (role && token) {
            fetchUserInfo();
        }
    }, []);

    const arr = hotels.map((data) => {
        return(
            <div onClick={() => router(`/hotel/${data.id}`)} className="hotels" key={data.id}>

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
                        Популярные отели {userInfo.email}
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
