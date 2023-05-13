import React from 'react';
import {Navigate} from "react-router-dom";
import '../Common.scss';
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";

function MainWindow() {
    const isUserAuth = useSelector(isAuth);
    if (window.localStorage.getItem("token") && isUserAuth) {
        return <Navigate to={"/hotels"} />;
    }

        return (
            <div className="mainpic">
                <div className="maincontent">
                    <div className="mcontainer">
                        <div className="mgrp">
                        </div>
                        <div className="maintxt">
                            <p>Добро пожаловать в веб-приложение</p>
                            <p>для поиска временного дома для</p>
                            <p>вашего питомца</p>
                        </div>
                    </div>
                </div>
            </div>
        )
}


export default MainWindow;