import React, {Component} from 'react';
import '../Common.scss';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import {Link} from "react-router-dom";
import logotipreg from "../MethodRegistration/img/logotipreg.svg"
class MethodRegistration extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="methodcontent">
                    <div className="conteinerreg">
                        <div className="logocont">
                            <img className="logotipreg" src={logotipreg} alt="logo"/>
                        </div>
                        <div className="textmethod">Выберите способ регистрации</div>
                        <div className="methreg">
                            <Link  to={"/Registration"}><button className="butmethreg1">Пользователь</button></Link>
                            <Link  to={"/"}><button className="butmethreg2">Компания</button></Link>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default MethodRegistration;