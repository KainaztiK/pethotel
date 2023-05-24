import React, {useEffect} from 'react';
import '../Common.scss';
import {Link, useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";
import logotipreg from "../MethodRegistration/img/logotipreg.svg"

function MethodRegistration() {
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
            router("/methodregistration");
        }
    }, [isUserAuth, router])
        return (
            <div>
                <div className="methodcontent">
                    <div className="conteinerreg">
                        <div className="logocont">
                            <img className="logotipreg" src={logotipreg} alt="logo"/>
                        </div>
                        <div className="textmethod">Выберите способ регистрации</div>
                        <div className="methreg">
                            <Link  to={"/registration"}><button className="butmethreg1">Пользователь</button></Link>
                            <Link  to={"/registrationcompany"}><button className="butmethreg2">Компания</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default MethodRegistration;