import React, {Component} from 'react';
import '../Common.scss';
import Autorizat from "../Functions/Autorize";
import {Link, Navigate} from "react-router-dom";
import lapkimg from "../Authorization/img/lapkimg.svg"
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";


function Authorization(){
    
    const isUserAuth = useSelector(isAuth);
    if (window.localStorage.getItem("token") && isUserAuth) {
        return <Navigate to={"/hotels"} />;
    }
    return (
            <div>
                <div className="bodyenter">
                    <div className="mainenter">
                        <div className="leftblockenter">
                            <Autorizat/>
                        </div>
                        <div className="rightblockenter">
                            <div className="blocklapkimg">
                                <img className="lapkimg" src={lapkimg} alt="lapki"/>
                            </div>
                            <div className="textfieldrightblock">
                                Pet Hotel
                            </div>
                            <div className="blocklinkandroid">
                                <h5 className="h5auth d-flex">скачать для <Link to="/"><div className="d-flex justify-center align-center androidlink">Android</div></Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Authorization;