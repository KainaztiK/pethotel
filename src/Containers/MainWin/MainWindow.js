import React, { useEffect } from 'react';
import '../Common.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";

function MainWindow() {
    const router = useNavigate()
    const isUserAuth = useSelector(isAuth);
    useEffect(()=>{
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
    }, [router, isUserAuth])
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