import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import axios from "axios";
import './Search.scss';
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";

function Search() {
    const [hotels, setHotels] = useState([]);
    const [searchHotel, setSearchHotel] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useNavigate()
    const isUserAuth = useSelector(isAuth);
    useEffect(() => {
        setIsLoading(true);
        async function fetchHotels(){
            const response = await axios.get('https://localhost:5001/api/hotels/advertisements/');
            setHotels(response.data);
            setIsLoading(false);
        } 
        fetchHotels();
        if(window.localStorage.getItem("role")==="User")
        {
            router("/search");
        }
        if(window.localStorage.getItem("role")==="Companyy")
        {
            router("/posts");
        }
        if(!window.localStorage.getItem("token"))
        {
            router("/");
        }
    }, [router, isUserAuth])

    const filteredHotel = hotels.filter(hotel => {
        return hotel.name.toLowerCase().includes(searchHotel.toLowerCase());
    })



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
                    {isLoading
                        ? <Loader/>
                        : <div className="BlockFilteredHotels">{arr}</div>
                    }

                </div>
            </div>
        </div>
    );
}
export default Search;