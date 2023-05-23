import React, {useEffect, useState} from 'react';
import '../Common.scss';
import logoHotels from "./img/logo.svg"
import {useNavigate} from "react-router-dom";
import { Categories } from '../Components/Categories/Categories';
// import Loader from "../Components/Loader/Loader";
// import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";
import Grid from '@mui/material/Grid';
import { Post } from "../Components/Post/index";
import { fetchHotels } from '../../redux/actions/hotels';

function Hotels(){
    // const [hotels, setHotels] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    // const [isLoading, setIsLoading] = useState(false);
    const router = useNavigate()
    const isUserAuth = useSelector(isAuth);
    
    const dispatch = useDispatch();
    const { hotels } = useSelector(state => state.hotels);
    const isPostsLoading = hotels.status === 'loading';
    useEffect(() => {
        dispatch(fetchHotels());
      }, [dispatch]);

    useEffect( () => {
        // setIsLoading(true);
        // async function fetchHotels(){
        //     const response = await axios.get('https://localhost:5001/api/hotels/advertisements/');
        //     setHotels(response.data);
        //     setIsLoading(false);
        // } 

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
        // fetchHotels();
    }, [isUserAuth, router]);
    

    // const arr = hotels.map((data) => {
    //     return(
    //         <div onClick={() => router(`/hotel/${data.id}`)} className="hotels" key={data.id}>

    //             <div className="leftBlockHotels">

    //             </div>
    //             <div className="rightBlockHotels">
    //                 <h3 className="h3nameHotel">{data.name}</h3>
    //                 <h4 className="h4sityHotel">{data.city}</h4>
    //             </div>
    //         </div>
    //     )
    // })
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
                    <div className="BlockHotels">
                        <Grid container>
                            <Grid item className="hotels">
                                {(isPostsLoading ? [...Array(5)] : hotels.items).slice(0).reverse().map((hotels, index) => (
                                    isPostsLoading ? (
                                    <Post key={index} isLoading={true} />
                                    )
                                    :
                                    (
                                    <Post xs={12}
                                        id={hotels.id}
                                        title={hotels.name}
                                        city={hotels.city}
                                        address={hotels.address}
                                        imageUrl={hotels.address ? `https://p1.zoon.ru/preview/8SSjYBbol7wGNRw4c4_62w/2400x1500x85/1/f/2/original_58e2572f40c08875708d8a0a_5e1749aee7cf0.jpg` : ''}
                                        key={`homePost-${index}`}
                                    />
                                    )
                                ))}
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hotels;
