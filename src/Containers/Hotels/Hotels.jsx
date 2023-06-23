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
    const [categoryId, setCategoryId] = useState({
        name: '',
        value: null,
    });
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
        console.log(hotels.items)

    }, [isUserAuth, router, hotels]);



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
                        {/* <button onClick={handleSortChange}>Сортировать</button> */}
                    </div>
                    {/*Text Hotelid*/}
                    <div className="textPopularHotel">
                        Популярные отели
                    </div>
                    
                    {/*Main Hotels*/}
                    <div className="BlockHotels">
                        <Grid container>
                            <Grid item className="hotels">
                                {(isPostsLoading ? [...Array(6)] : hotels.items.filter((hotel)=>{
                                    if(categoryId.value===null){
                                        return hotels;
                                    }
                                    else{
                                        if(hotel.cat===categoryId.value && categoryId.name==='Кошки'){
                                            return hotels;
                                        }
                                        if(hotel.dog===categoryId.value && categoryId.name==='Собаки'){
                                            return hotels;
                                        }
                                        if(hotel.rodent===categoryId.value && categoryId.name==='Грызуны'){
                                            return hotels;
                                        }
                                        if(hotel.other===categoryId.value && categoryId.name==='Другие'){
                                            return hotels;
                                        }
                                    }  
                                })).slice(0).reverse().map((hotels, index) => (
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



// .filter(
//     (values)=>{
//         if(categoryId.value!==null){
//             return true;
//         }
//         else{
//             if(categoryId.name==='Кошки' && categoryId.value===values.cat){
//                 return true;
//             }
//             if(categoryId.name==='Собаки' && categoryId.value===values.dog){
//                 return true;
//             }
//             if(categoryId.name==='Грызуны' && categoryId.value===values.rodent){
//                 return true;
//             }
//             if(categoryId.name==='Другие' && categoryId.value===values.other){
//                 return true;
//             }
//         }
//         return true;
//     })