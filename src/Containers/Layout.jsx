import React from "react";
import { Outlet, NavLink } from 'react-router-dom';
import "./Layout.scss";
import MyImage from "./MainWin/img/logo.svg";
import ipethotel from "./Registration/img/ic_pet_hotel_1.svg";
import telegram from "./Registration/img/telegram.svg";
import vk from "./Registration/img/vk.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { logout, isAuth } from "../store/slices/authSlice";

const Layout = () => {
    const isUserAuth = useSelector(isAuth);
    const dispatch = useDispatch();
    const onClickLogout = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
        dispatch(logout());
        window.localStorage.removeItem("token");
        }
    };

    return (
        <>
            <header>
                <div className="headerblock">
                    <div className="headerleftblock clear">
                        <NavLink to="/">
                            <div className="headerLeft">
                                <img width={50} height={50} src={MyImage} className="logo mt-5" alt="logotip"/>
                                <div className="logotxt">
                                    <h3 className="">Pet</h3>
                                    <h3 className="">Hotel</h3>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="buttons">
                        {isUserAuth ? (<>
                            <NavLink to="search">
                                <button className="authbutton" aria-label="Поиск">
                                    <AiOutlineSearch size={'2rem'}/>
                                    Поиск
                                </button>
                            </NavLink>
                            <NavLink to="/">
                                <button className="authbutton" aria-label="Избранное">
                                    <AiFillHeart size={'2rem'}/>
                                    Избранное
                                </button>
                            </NavLink>
                            <NavLink to="/hotels">
                                <button className="authbutton" aria-label="Аккаунт">
                                    <AiOutlineUser size={'2rem'}/>
                                    <span>
                                        Аккаунт
                                    </span>
                                </button>
                            </NavLink>
                            <button onClick={onClickLogout} color="error" variant="contained" aria-label="Выйти">
                                Выйти
                            </button>
                        </>) : (<>
                            <NavLink to="autorization">
                                <button className="btnhead" aria-label="Войти">
                                    Войти
                                </button>
                            </NavLink>
                            <NavLink to="methodregistration">
                                <button className="btnhead" aria-label="Зарегистрироваться">
                                        Зарегистрироваться
                                </button>
                            </NavLink>
                        </>)}
                        
                    </div>
                </div>
            </header>
            

            <main className="container">
                <Outlet />
            </main>

            <footer>
                <div className="footerall d-flex justify-center clear">
                    <img src={ipethotel} className="iPetHotel" alt="IconPetHotel"/>
                    <div className="contentftr">
                        <div className="footercontent text-center align-center">
                            <p>Контакты</p>
                            <p>+7 (xxx)xxx-xx-xx</p>
                            <p>+7 (xxx)xxx-xx-xx</p>
                        </div>
                        <div className="footercontent1">
                            <p>
                                @2022-2023 PetHotel.ru Все права защищены
                            </p>
                        </div>
                    </div>
                    <ul className="footerright">
                        <li>
                            <h4 className="footercontent2">
                                Мы в соцсетях
                            </h4>
                        </li>
                        <li className="footercontent2">
                            <img src={telegram} className="iTelegram" alt="IconTelegram"/>
                            <img src={vk} className="iVK" alt="IconVK"/>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export {Layout}