import React, {Component} from 'react';
import {Link} from "react-router-dom";
import MyImage from "./img/logo.svg";
import mainGrp from "./img/mGrp.svg";
import '../Common.scss';
import Footer from "../Components/Footer";

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
                            <Link to="/Autorization">
                                <button className="enter">
                                    Войти
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/MethodRegistration">
                                <button className="registration">
                                        Зарегистрироваться
                                </button>
                            </Link>
                        </li>
                    </ul>
                </header>
                <div className="maincontent">
                    <img src={mainGrp} className="mgrp" alt="mainpicture"></img>
                    <block className="maintxt">
                        <p>Добро пожаловать в веб-приложение</p>
                        <p>для поиска временного дома для</p>
                        <p>вашего питомца</p>
                    </block>
                </div>
                <div className="mainpic">

                </div>
                <Footer/>
            </div>
        )
    }
}


export default MainWindow;