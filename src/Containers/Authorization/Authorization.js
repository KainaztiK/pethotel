import React from 'react';
import '../Common.scss';
import Autorizat from "../Functions/Autorize";
import {useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";
import { useEffect } from 'react';

function Authorization(){
    const router = useNavigate();
    const isUserAuth = useSelector(isAuth);
    useEffect(() => {
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
            router("/autorization");
        }
    }, [isUserAuth, router]);

    return (
            <div>
                <div className="bodyenter">
                    <div className="mainenter">
                        <div className="leftblockenter">
                            <Autorizat/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Authorization;