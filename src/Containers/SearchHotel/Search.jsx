import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import './Search.scss';
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";
import Grid from '@mui/material/Grid';
import { Post } from "../Components/Post/index";
// import { fetchHotels } from '../../redux/actions/hotels';
import Axios from "../../API/api";

function Search() {
    const [hotels, setHotels] = useState([]);
    const [searchHotel, setSearchHotel] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useNavigate()
    const isUserAuth = useSelector(isAuth);
    
    useEffect(() => {
        setIsLoading(true);
        async function fetchHotels(){
            const response = await Axios.get('/api/hotels/advertisements/');
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
            router("/search");
        }
        if(!window.localStorage.getItem("token"))
        {
            router("/");
        }
    }, [router, isUserAuth])

    const skeletons = [...Array(5)].map((_, index) => <Post key={index} isLoading={true} />);

    function filterHotelv2(){
        try {
            if(filteredHotel.length !== 0){
                return filteredHotel;
            }
            else{
                return <div>Ничего не найдено в выбранной области поиска</div>
            }
        } catch (err) {
            return alert("При загрузке постов произошла ошибка.");
        }
    }

    var filteredHotel = hotels.filter(hotel =>{
        if(hotel.name.toLowerCase().includes(searchHotel.toLowerCase())){
            return true;
        }
        else{
            return false;
        }
        }).slice(0).reverse().map((hotels, index)=><Post xs={12}
        advertisementId={hotels.advertisementId}
        title={hotels.name}
        city={hotels.city}
        address={hotels.address}
        imageUrl={(hotels.photos.length === 0) ? '' : `http://185.139.69.220/photo/${hotels.photos[hotels.photos.length-1]}`}
        key={`homePost-${index}`}
    />);

    return (
        <div>
            <div className="SearchHotel">
                <div className="blockSearchHotel">
                        {/*IMG LOGO*/}
                        {/*Main Hotels*/}
                        <div className="BlockHotels">
                            <Grid container>
                                <div className="SearchHotelInput">
                                    <input onChange={(e)=>setSearchHotel(e.target.value)} className="inputSearch" type="search" placeholder="Search..."/>
                                </div >
                                <Grid item className="hotels">
                                    {isLoading 
                                        ? skeletons
                                        : filterHotelv2(filteredHotel)
                                    }
                                </Grid>
                            </Grid>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default Search;