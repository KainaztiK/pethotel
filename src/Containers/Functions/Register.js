import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
function Registr() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [doublePassword, setDoublePassword] = useState('')
    const [usernameDirty, setUsernameDirty] = useState(false)
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [doublePasswordDirty, setDoublePasswordDirty] = useState(false)
    const [usernameError, setUsernameError] = useState('Имя не должно быть пустым')
    const [emailError, setEmailError] = useState('Email не должен быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не должен быть пустым')
    const [doublePasswordError, setDoublePasswordError] = useState('Пароль не должен быть пустым')
    const [formValid, setFormValid] = useState(false)

    useEffect( () => {
            if(usernameError || emailError || passwordError || doublePasswordError){
                setFormValid(false)
            }
            else {
                setFormValid(true)
            }
        }, [usernameError, emailError,passwordError, doublePasswordError]
    )

    const usernameHandler = (e) => {
        setUsername(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 30) {
            setUsernameError('Пароль должен быть длиннее 3 и меньше 30')
            if (e.target.value) {
                setUsernameError('Пароль не должен быть пустым')
            }
        } else {
            setUsernameError('')
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /\S+@\S+\.\S+/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный Email')
        } else {
            setEmailError('')
        }
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 30) {
            setPasswordError('Пароль должен быть длиннее 3 и меньше 30')
            if (e.target.value) {
                setPasswordError('Пароль не должен быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }
    const doublePasswordHandler = (e) => {
        setDoublePassword(e.target.value)
        if(password !== doublePassword){
            setDoublePasswordError('')
        }
        else {
            setDoublePasswordError('Пароли не совпадают')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'username':
                setUsernameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'doublePassword':
                setDoublePasswordDirty(true)
                break
            default:
        }
    }
    const signUP = async (e) => {
        console.log(username, email, password)
        const res = await axios.post('https://localhost:5001/api/authentication/registrationUser', {
            username,
            email,
            password,
            "roles": [
                "User"
            ]
        })
        console.log(res)
    }


    return(
        <div className="form-rega text-field">
            <div className="padinput">
                {(usernameDirty && usernameError) && <div className="Errors">{usernameError}</div> }
                <input onChange={e => usernameHandler(e)} value={username} onBlur={e => blurHandler(e)} className="text-field__input" type="text" name="username" id="username"
                       placeholder="Введите ваше имя"/>
            </div>
            <div className="padinput">
                {(emailDirty && emailError) && <div className="Errors">{emailError}</div> }
                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className="text-field__input" type="text" name="email" id="email"
                       placeholder="Введите вашу почту"/>
            </div>
            <div className="padinput">
                {(passwordDirty && passwordError) && <div className="Errors">{passwordError}</div> }
                <input value={password} onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} className="text-field__input icon" type="password" name="password" id="password"
                       placeholder="Введите пароль" />
            </div>
            <div className="padinput">
                {(doublePasswordDirty && doublePasswordError) && <div className="Errors">{doublePasswordError}</div> }
                <input value={doublePassword} onChange={e => doublePasswordHandler(e)} onBlur={e => blurHandler(e)} className="icon text-field__input" type="password" name="doublePassword" id="password"
                       placeholder="Повторите пароль"/>
            </div>
            <Link to="/Autorization"><button disabled={!formValid} onClick={signUP} className="butrega">Зарегистрироваться</button></Link>
            <div>
                <h5 className="d-flex justify-center clear h5rega">У вас уже есть аккаунт? <Link to="/Autorization"><div className="d-flex justify-center align-center ml-5 h5regalink">Войти</div></Link></h5>
            </div>
        </div>
    );
}
export default Registr