import React, {useEffect, useState} from 'react';
import Header2 from "../Components/Header2";
import Footer from "../Components/Footer";
import '../Common.scss';
import logoHotels from "./img/logo.svg"
import {useNavigate} from "react-router-dom";
import Api from "../../API/api";
import Loader from "../Components/Loader/Loader";
import {useFetching} from "../Functions/hooks/useFetching";


function Hotels(){
    const [hotels, setHotels] = useState([])
    const [fetchHotels, isHotelsLoading, hotelError] = useFetching( async () => {
        const response = await Api.getHotels();
        setHotels(response.data);
    })
    // const token = localStorage.getItem('token')
    // const getHotels = async (e) => {
    //     const res = await axios.get('https://localhost:5001/api/hotels/advertisements/', {
    //
    //     })
    //     console.log(res)
    //     localStorage.setItem('token:', res.data.token)
    // }
    const router = useNavigate()
    console.log(router)

    useEffect(() => {
        fetchHotels()
    }, [])




    const arr = hotels.map((data) => {
        return(
            <div onClick={() => router(`/Hotelid/${data.id}`)} className="hotels" key={data.id}>

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
            <Header2/>
            <div className="blockBackBasicWindow">
                <div className="blockBasicWindow">
                    {/*IMG LOGO*/}
                    <div className="ImgLogoBasicWindow">
                        <img src={logoHotels} className="logoBasicWindow" alt="logo"/>
                    </div >
                    {/*Pet Choose*/}
                    <div className="petChoose">

                    </div>
                    {/*Text Hotelid*/}
                    <div className="textPopularHotel">
                        Популярные отели
                    </div>
                    {hotelError &&
                        <h1>Произошла ошибка ${hotelError}</h1>
                    }
                    {/*Main Hotels*/}
                    {isHotelsLoading
                        ? <Loader/>
                        : <div className="BlockHotels">{arr}</div>
                    }

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Hotels;
