import React, {useEffect} from 'react';
import Registr from "../Functions/Register";
import imgvanna from "../Registration/img/vanna.svg";
import '../Common.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";

function Registration() {
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
            router("/registration");
        }
    }, [router, isUserAuth])
    
        return (
            <div>

                <div className="bodyrega">
                    <div className="mainrega">
                        <img src={imgvanna} className="cssvanna" alt="ImageVanna"/>
                        <h2 className="regatxt">Регистрация</h2>
                        <Registr/>
                    </div>
                </div>
            </div>
        );
}

export default Registration;