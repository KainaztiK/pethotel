import {Link, Navigate} from "react-router-dom";
import React from "react";
import enterimg from "../Authorization/img/enterimg.svg";
import {Login} from "./Login.jsx";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";

function Autorizat() {

    const isUserAuth = useSelector(isAuth);
    if (window.localStorage.getItem("token") && isUserAuth) {
        return <Navigate to={"/hotels"} />;
    }

    return (
        <div className="form-enter text-field">
            <div className="picentertxt">
                <img src={enterimg} className="cssvanna1" alt="ImageEnter"/>
                <h2 className="entertxt">Вход</h2>
            </div>
            <div className="blocktextinput">
                <Login/>
                <div>
                    <h5 className="hrega d-flex clear">У вас нет аккаунта? <Link to="/methodregistration">
                        <div className="d-flex justify-center align-center ml-5 h5regalink">Зарегистрируйтесь</div>
                    </Link></h5>
                </div>
            </div>
        </div>
    );
}
export default Autorizat;