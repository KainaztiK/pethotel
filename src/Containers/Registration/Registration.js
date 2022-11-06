import React, {Component} from 'react';
import {Link} from "react-router-dom";
import imgvanna from "../Registration/img/vanna.svg";
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import '../Common.scss';

class Registration extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="bodyrega">
                    <div className="mainrega">
                        <img width={250} height={150} src={imgvanna} className="cssvanna" alt="ImageVanna"/>
                        <h2 className="regatxt">Регистрация</h2>
                        <div className="form-rega text-field">

                           <div className="padinput">
                               <input className="text-field__input" type="text" name="username" id="username"
                                      placeholder="Введите ваше имя"/>
                           </div>
                            <div className="padinput">
                                <input className="text-field__input" type="text" name="email" id="email"
                                       placeholder="Введите вашу почту"/>
                            </div>
                            <div className="padinput">
                                <input className="text-field__input icon" type="text" name="password" id="password"
                                       placeholder="Введите пароль" />
                                <span className="text-field__aicon">
                                    <svg width="40" height="40" viewBox="2 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.85178 12.7081C3.55533 8.30778 7.80653 5.17214 12.8064 5.14204C17.8064 5.11195 22.095 8.19619 23.8514 12.5757C22.1478 16.976 17.8966 20.1117 12.8967 20.1418C7.89682 20.1719 3.60817 17.0876 1.85178 12.7081ZM12.8185 7.14201C16.6084 7.1192 20.0012 9.22881 21.6714 12.5888C20.0417 15.9687 16.6746 18.119 12.8847 18.1418C9.09476 18.1646 5.702 16.055 4.03174 12.695C5.66143 9.31512 9.02855 7.16482 12.8185 7.14201ZM8.35166 12.669C8.33674 10.189 10.3445 8.15692 12.8245 8.14199C15.3045 8.12706 17.3366 10.1349 17.3515 12.6148C17.3664 15.0948 15.3586 17.1269 12.8787 17.1418C10.3987 17.1568 8.36659 15.1489 8.35166 12.669ZM15.3515 12.6269C15.3432 11.2469 14.2165 10.1336 12.8365 10.142C11.4566 10.1503 10.3433 11.277 10.3516 12.657C10.3599 14.0369 11.4867 15.1502 12.8666 15.1419C14.2466 15.1336 15.3598 14.0068 15.3515 12.6269Z" fill="#FF5E00"/>
                                    </svg>
                                </span>
                            </div>
                            <div className="padinput">
                                <input className="icon text-field__input" type="text" name="password" id="#password"
                                       placeholder="Повторите пароль"/>
                                <span className="text-field__aicon2">
                                   <svg width="40" height="40" viewBox="2 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.85178 12.7081C3.55533 8.30778 7.80653 5.17214 12.8064 5.14204C17.8064 5.11195 22.095 8.19619 23.8514 12.5757C22.1478 16.976 17.8966 20.1117 12.8967 20.1418C7.89682 20.1719 3.60817 17.0876 1.85178 12.7081ZM12.8185 7.14201C16.6084 7.1192 20.0012 9.22881 21.6714 12.5888C20.0417 15.9687 16.6746 18.119 12.8847 18.1418C9.09476 18.1646 5.702 16.055 4.03174 12.695C5.66143 9.31512 9.02855 7.16482 12.8185 7.14201ZM8.35166 12.669C8.33674 10.189 10.3445 8.15692 12.8245 8.14199C15.3045 8.12706 17.3366 10.1349 17.3515 12.6148C17.3664 15.0948 15.3586 17.1269 12.8787 17.1418C10.3987 17.1568 8.36659 15.1489 8.35166 12.669ZM15.3515 12.6269C15.3432 11.2469 14.2165 10.1336 12.8365 10.142C11.4566 10.1503 10.3433 11.277 10.3516 12.657C10.3599 14.0369 11.4867 15.1502 12.8666 15.1419C14.2466 15.1336 15.3598 14.0068 15.3515 12.6269Z" fill="#FF5E00"/>
                                    </svg>
                                </span>
                            </div>
                            <button className="butrega">Зарегистрироваться</button>
                            <div>
                                <h5 className="d-flex ml-30 mr-5 clear h5rega">У вас уже есть аккаунт? <Link to="/Autorization"><div className="d-flex justify-center align-center ml-5 h5regalink">Войти</div></Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Registration;