import React from "react";
import { Outlet, NavLink } from 'react-router-dom';
import "./Layout.scss";
import MyImage from "./MainWin/img/logo.svg";
import ipethotel from "./Registration/img/ic_pet_hotel_1.svg";
import telegram from "./Registration/img/telegram.svg";
import vk from "./Registration/img/vk.svg";
// import { useSelector } from "react-redux";
import Button from "@mui/material/Button";


const Layout = () => {
    // const isUserAuth = useSelector(true);
    //const dispatch = useDispatch();
    // const onClickLogout = () => {
    //     if (window.confirm("Вы действительно хотите выйти?")) {
    //     //dispatch(logout());
    //     window.localStorage.removeItem("token");
    //     }
    // };

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
                        {/* {isUserAuth ? (<>
                            <Button onClick={onClickLogout} color="error" variant="contained" aria-label="Выйти">
                                Выйти
                            </Button>
                        </>) : (<>
                            <Link to="/login">
                            <Button color="primary" component="button" variant="contained" aria-label="Войти">
                                Войти
                            </Button>
                            </Link>
                            <Link to="/login">
                            <Button color="primary" component="button" variant="contained" aria-label="Зарегистрироваться">
                                Зарегистрироваться
                            </Button>
                            </Link>
                        </>)} */}
                        <NavLink to="Autorization">
                            <Button aria-label="Войти">
                                Войти
                            </Button>
                        </NavLink>
                        <NavLink to="MethodRegistration">
                            <Button aria-label="Зарегистрироваться">
                                    Зарегистрироваться
                            </Button>
                        </NavLink>
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