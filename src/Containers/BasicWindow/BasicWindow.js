import React, {useEffect, useState} from 'react';
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../Common.scss';
import logoBasicWindow from "../BasicWindow/img/logo.svg"


function BasicWindow(){

    // const token = localStorage.getItem('token')
    // const getHotels = async (e) => {
    //     const res = await axios.get('https://localhost:5001/api/hotels/advertisements/', {
    //
    //     })
    //     console.log(res)
    //     localStorage.setItem('token:', res.data.token)
    // }

    const [data, setData] = useState([])
    useEffect(() => {
    axios.get('https://localhost:5001/api/hotels/advertisements/')
        .then(res => {
            console.log("Getting from ::::", res.data)
            setData(res.data)
        }).catch(err => console.log(err))
    },[])
    const arr = data.map((data, index) => {
        return(
            <div className="hotels">

                <div className="leftBlockHotels">

                </div>
                <div className="rightBlockHotels">
                    {data.name}
                    {data.city}
                </div>
            </div>
        )
    })
    return (
        <div>
            <Header/>
            <div className="blockBackBasicWindow">
                <div className="blockBasicWindow">
                    {/*IMG LOGO*/}
                    <div className="ImgLogoBasicWindow">
                        <img src={logoBasicWindow} className="logoBasicWindow" alt="logo"/>
                    </div >
                    {/*Pet Choose*/}
                    <div className="petChoose">

                    </div>
                    {/*Text Hotel*/}
                    <div className="textPopularHotel">
                        Популярные отели
                    </div>
                    {/*Main Hotels*/}
                    <div className="BlockHotels">
                        {arr}
                    </div>
                    {/*Text PopularHotel*/}
                    <div>

                    </div>
                    {/*Popular Hotels*/}
                    <div>

                    </div>

                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default BasicWindow;
