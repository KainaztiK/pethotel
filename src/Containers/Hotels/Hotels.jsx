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
    const [categoryId, setCategoryId] = useState('');
    const router = useNavigate()
    const isUserAuth = useSelector(isAuth);
    const dispatch = useDispatch();
    const { hotels } = useSelector(state => state.hotels);
    const isPostsLoading = hotels.status === 'loading';
    useEffect(() => {
        dispatch(fetchHotels());
    }, [dispatch]);

    useEffect( () => {
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
    }, [isUserAuth, router]);
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
                                {(isPostsLoading ? [...Array(5)] : hotels.items).slice(0).reverse().sort().map((hotels, index) => (
                                    isPostsLoading ? (
                                    <Post key={index} isLoading={true} />
                                    )
                                    :
                                    (
                                    <Post xs={12}
                                        advertisementId={hotels.advertisementId}
                                        title={hotels.name}
                                        city={hotels.city}
                                        address={hotels.address}
                                        imageUrl={(hotels.photos.length === 0) ? '' : `http://185.139.69.220/photo/${hotels.photos[hotels.photos.length-1]}`}
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
