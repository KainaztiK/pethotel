import React, {useEffect, useState} from "react";
import {useNavigate, Navigate} from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import {useFetching} from "../Functions/hooks/useFetching";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";
import axios from "axios";
import './Search.scss';
function Search() {
    const [hotels, setHotels] = useState([]);
    const [searchHotel, setSearchHotel] = useState('');
    const [fetchHotels, isHotelsLoading] = useFetching( async () => {
        const response = await axios.get('https://localhost:5001/api/hotels/advertisements/');
        setHotels(response.data);
    });
    
    const router = useNavigate()
    console.log(router)
    
    useEffect(() => {
        fetchHotels();
    }, [])

    const filteredHotel = hotels.filter(hotel => {
        return hotel.name.toLowerCase().includes(searchHotel.toLowerCase());
    })

    const isUserAuth = useSelector(isAuth);
    if (!window.localStorage.getItem("token") && !isUserAuth) {
        return <Navigate to={"/"} />;
    }


    const arr = filteredHotel.map((data) => {
        return(
            <div onClick={() => router(`/hotel/${data.id}`)} className="searchedHotel" key={data.id}>

                <div className="leftSearchedHotel">

                </div>
                <div className="rightSearchedHotel">
                    <h3 className="h3Searched">{data.name}</h3>
                    <h4 className="h4Searched">{data.city}</h4>
                </div>
            </div>
        )
    })
    return (
        <div>
            <div className="SearchHotel">
                <div className="blockSearchHotel">
                    {/*IMG LOGO*/}
                    <div>
                        <input onChange={(e)=>setSearchHotel(e.target.value)} className="inputSearch" type="search" placeholder="Search..."/>
                    </div >
                    {/*Main Hotels*/}
                    {isHotelsLoading
                        ? <Loader/>
                        : <div className="BlockFilteredHotels">{arr}</div>
                    }

                </div>
            </div>
        </div>
    );
}
export default Search;