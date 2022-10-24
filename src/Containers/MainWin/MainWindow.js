import React, {Component} from 'react';
import MyImage from "./img/logo.svg";
import mainGrp from "./img/mGrp.svg";
import ipethotel from "./img/ic_pet_hotel_1.svg"
import telegram from "./img/telegram.svg"
import vk from "./img/vk.svg"

import './MainWindow.scss';

class MainWindow extends Component {
    render() {
        return (
            <div className="wrapper">
                <header className="fullhead d-flex justify-between">
                    <div className="headerLeft d-flex align-center">
                        <img width={50} height={50} src={MyImage} className="logo" alt="logotip"/>
                        <div className="headerInfo">
                            <h3 className="headh3">Pet</h3>
                            <h3 className="headh3">Hotel</h3>
                        </div>
                    </div>
                    <ul className="headerRight d-flex clear">
                        <li>
                            <button className="enter">
                                Войти
                            </button>
                        </li>
                        <li>
                            <button className="registration">
                                Зарегистрироваться
                            </button>
                        </li>
                    </ul>
                </header>
                <div className="content d-flex justify-center">
                    <img width={248} height={214} src={mainGrp} className="mgrp" alt="mainpicture"></img>
                    <block className="maincontent text-center align-center">
                        <p>Добро пожаловать в веб-приложение</p>
                        <p>для поиска временного дома для</p>
                        <p>вашего питомца</p>
                    </block>
                </div>
                <mainpic className="mainpicture">

                </mainpic>
                <footer className="footerall d-flex justify-center clear">
                    <img width={114} height={114} src={ipethotel} className="iPetHotel mr-50 mt-15" alt="IconPetHotel"/>
                    <div className="mr-50">
                        <block1 className="footercontent text-center align-center">
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
        );
    }
}


export default MainWindow;