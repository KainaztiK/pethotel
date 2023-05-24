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
            router("/posts");
        }
        if(!window.localStorage.getItem("token"))
        {
            router("/");
        }
    }, [router, isUserAuth])

    const skeletons = [...Array(5)].map((_, index) => <Post key={index} isLoading={true} />);

    const filteredHotel = hotels.filter(hotel =>{
        if(hotel.name.toLowerCase().includes(searchHotel.toLowerCase())){
            return true;
        }
        return false;
    }).slice(0).reverse().map((hotels, index)=><Post xs={12}
    id={hotels.id}
    title={hotels.name}
    city={hotels.city}
    address={hotels.address}
    imageUrl={hotels.address ? `https://p1.zoon.ru/preview/8SSjYBbol7wGNRw4c4_62w/2400x1500x85/1/f/2/original_58e2572f40c08875708d8a0a_5e1749aee7cf0.jpg` : ''}
    key={`homePost-${index}`}
/>);

    return (
        <div>
            <div className="SearchHotel">
                <div className="blockSearchHotel">
                    {/*IMG LOGO*/}
                    <div class="SearchHotelInput">
                        <input onChange={(e)=>setSearchHotel(e.target.value)} className="inputSearch" type="search" placeholder="Search..."/>
                    </div >
                    {/*Main Hotels*/}
                    <div className="BlockHotels">
                        <Grid container>
                            <Grid item className="hotels">
                                {isLoading 
                                    ? skeletons
                                    : filteredHotel
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