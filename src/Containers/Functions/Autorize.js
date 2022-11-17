import {Link} from "react-router-dom";
import React from "react";
import enterimg from "../Authorization/img/enterimg.svg";
import {useEffect, useState} from "react";

function Autorizat() {
    const [email1, setEmail1] = useState('')
    const [password1, setPassword1] = useState('')
    const [email1Dirty, setEmail1Dirty] = useState(false)
    const [password1Dirty, setPassword1Dirty] = useState(false)
    const [email1Error, setEmail1Error] = useState('Email не должен быть пустым')
    const [password1Error, setPassword1Error] = useState('Пароль не должен быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect( () => {
            if(email1Error || password1Error){
                setFormValid(false)
            }
            else {
                setFormValid(true)
            }
        }, [email1Error,password1Error]
    )
    const emailHandler = (e) => {
        setEmail1(e.target.value)
        const re = /\S+@\S+\.\S+/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmail1Error('Некорректный Email')
        } else {
            setEmail1Error('')
        }
    }
    const passwordHandler = (e) => {
        setPassword1(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 30) {
            setPassword1Error('Пароль должен быть длиннее 3 и меньше 30')
            if (e.target.value) {
                setPassword1Error('Пароль не должен быть пустым')
            }
        } else {
            setPassword1Error('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmail1Dirty(true)
                break
            case 'password':
                setPassword1Dirty(true)
                break
            default:
        }
    }

    return (
        <div className="form-enter text-field">
            <div className="picentertxt">
                <img src={enterimg} className="cssvanna1" alt="ImageEnter"/>
                <h2 className="entertxt">Вход</h2>
            </div>
            <div className="blocktextinput">
                <div className="padinput">
                    {(email1Dirty && email1Error) && <div className="Errors">{email1Error}</div> }
                    <input onChange={e => emailHandler(e)} value={email1} onBlur={e => blurHandler(e)}
                           className="text-field__input" type="text" name="email"
                           id="email"
                           placeholder="Введите вашу почту"/>
                </div>
                <div className="padinput">
                    {(password1Dirty && password1Error) && <div className="Errors">{password1Error}</div> }
                    <input value={password1} onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)}
                           className="text-field__input icon2" type="text"
                           name="password" id="password"
                           placeholder="Введите пароль"/>
                </div>

                <Link to="/"><button disabled={!formValid} className="butenter" name="signbutton">Войти</button></Link>
                <div>
                    <h5 className="hrega d-flex clear">У вас нет аккаунта? <Link to="/MethodRegistration">
                        <div className="d-flex justify-center align-center ml-5 h5regalink">Зарегистрируйтесь</div>
                    </Link></h5>
                </div>
            </div>
        </div>
    );
}
export default Autorizat;