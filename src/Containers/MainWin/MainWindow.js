import React, {Component} from 'react';
import {Link} from "react-router-dom";
import MyImage from "./img/logo.svg";
import mainGrp from "./img/mGrp.svg";
import ipethotel from "./img/ic_pet_hotel_1.svg"
import telegram from "./img/telegram.svg"
import vk from "./img/vk.svg"
import '../Common.scss';

class MainWindow extends Component {
    render() {
        return (
            <div>
                <header className="headerwrapp clear">
                    <Link to="/">
                        <div className="headerLeft">
                            <img width={50} height={50} src={MyImage} className="logo mt-5" alt="logotip"/>
                            <div className="mt-5 logotxt">
                                <h3 className="mr-5">Pet</h3>
                                <h3 className="">Hotel</h3>
                            </div>
                        </div>
                    </Link>
                    <ul className="headerRight d-flex mt-15 mr-20">
                        <li>
                            <button className="enter">
                                <Link to="/Autorization">
                                    Войти
                                </Link>
                            </button>
                        </li>
                        <li>
                            <button className="registration">
                                <Link to="/Registration">
                                    Зарегистрироваться
                                </Link>
                            </button>
                        </li>
                    </ul>
                </header>
                <div className="maincontent">
                    <img width={200} height={160} src={mainGrp} className="mgrp mt-20" alt="mainpicture"></img>
                    <block className="maintxt">
                        <p>Добро пожаловать в веб-приложение</p>
                        <p>для поиска временного дома для</p>
                        <p>вашего питомца</p>
                    </block>
                </div>
                <div className="mainpic">

                </div>
                <footer className="footerall clear d-flex justify-center">
                    <img width={114} height={114} src={ipethotel} className="iPetHotel mr-50 mt-15" alt="IconPetHotel"/>
                    <div className="mr-50">
                        <block1 className="footercontent2">
                            <p>Контакты</p>
                            <p>+7 (xxx)xxx-xx-xx</p>
                            <p>+7 (xxx)xxx-xx-xx</p>
                        </block1>
                        <block2 className="footercontent1">
                            <p>
                                @2022-2023 PetHotel.ru Все права защищены
                            </p>
                        </block2>
                    </div>
                    <ul className="footerright">
                        <li>
                            <h4 className="footercontent">
                                Мы в соцсетях
                            </h4>
                            <img width={33} height={33} src={telegram} className="iTelegram ml-15" alt="IconTelegram"/>
                            <img width={33} height={33} src={vk} className="iVK ml-10" alt="IconVK"/>
                        </li>
                    </ul>
                </footer>
            </div>
        )
    }
}


export default MainWindow;