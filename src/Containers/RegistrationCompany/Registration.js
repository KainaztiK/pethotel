import React, {useEffect, useState} from 'react';
import reg from '../../images/regComp.svg';
import classes from "./Registration.module.css"
import {Link} from "react-router-dom";
import lock from "../../images/lock.png";
import Axios from "../../API/api";

let check =false;
function Registration(){

    const[INN, setINN]=useState('')
    const[HotelName, setHotelName]=useState('')
    const[UserName, setUserName]=useState('')
    const[Email, setEmail]=useState('')
    const[Password, setPassword]=useState('')
    const[CopyPassword, setCopyPassword]=useState('')
    const[INNNull, setINNNull]=useState(false)
    const[HotelNameNull, setHotelNameNull]=useState(false)
    const[UserNameNull, setUserNameNull]=useState(false)
    const[EmailNull, setEmailNull]=useState(false)
    const[PasswordNull, setPasswordNull]=useState(false)
    const[CopyPasswordNull, setCopyPasswordNull]=useState(false)
    const[INNError, setINNError]=useState('ИНН не может быть пустым!')
    const[HotelNameError, setHotelNameError]=useState('Название не может быть пустым!')
    const[UserNameError, setUserNameError]=useState('Имя не может быть пустым!')
    const[EmailError, setEmailError]=useState('Почта не может быть пустой!')
    const[PasswordError, setPasswordError]=useState('Пароль не может быть пустым!')
    const[CopyPasswordError, setCopyPasswordError]=useState('Повторение пароля не может быть пустым!')
    const [formValid, setFormValid] = useState(false)

    const passwordCheck = () => {
        const elem1 = document.querySelector('#pass1_img');
        const input1 = document.querySelector('#Password');
        const elem2 = document.querySelector('#pass2_img');
        const input2 = document.querySelector('#PasswordCopy');
        if(check ===false){
            elem1.className = classes.passwordUnImg;
            check =true;
            input1.type ='text';
            elem2.className = classes.passwordUnImg;
            input2.type ='text';
        }
        else if(check ===true){
            elem1.className = classes.passwordImg;
            check = false;
            input1.type ='password';
            elem2.className = classes.passwordImg;
            input2.type ='password';
        }
    }
    useEffect(()=>{
        if(UserNameError || HotelNameError || EmailError || INNError || PasswordError || CopyPasswordError){
            setFormValid(false)
            document.getElementById('sinInButton').className = classes.BadSignIn;
        }
        else{
            setFormValid(true)
            document.getElementById('sinInButton').className = classes.sigIn;
        }
    }, [UserNameError, HotelNameError, EmailError, INNError, PasswordError, CopyPasswordError]
    )

    const INNHandler = (e) => {
        const innInput = document.querySelector('#INN')
        setINN(e.target.value)
        const regex = /((?=.*\d).{12})/;
        if(!regex.test(e.target.value)){
            setINNError('Неверное значение ИНН')
            console.log('Ошибка в ИНН')
            innInput.className = classes.textBoxError;
        }
        else{
            setINNError('')
            console.log('Ошибка в ИНН нет')
            innInput.className = classes.textBox;
        }
    }
    const loginHandler = (e) => {
        const login = document.querySelector('#Login')
        setUserName(e.target.value)
        if(e.target.value.length < 10 || e.target.value.length >50){
            setUserNameError('Длина имени - не более 50 и не менее 10 знаков')
            console.log('Ошибка в Логине')
            login.className = classes.textBoxError;
        }
        else{
            setUserNameError('')
            console.log('Ошибка в Логине нет')
            login.className = classes.textBox;
        }
    }
    const hotelHandler = (e) => {
        const hotel = document.querySelector('#Hotel')
        setHotelName(e.target.value)
        if(e.target.value.length < 10 || e.target.value.length >50){
            setHotelNameError('Длина названия отеля - не более 50 и не менее 10 знаков')
            console.log('Ошибка в Названии')
            hotel.className = classes.textBoxError;
        }
        else{
            setHotelNameError('')
            console.log('Ошибка в Названии нет')
            hotel.className = classes.textBox;
        }
    }
    const emailHandler = (e) => {
        const emailInput = document.querySelector('#Email')
        setEmail(e.target.value)
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regex.test(e.target.value)){
            setEmailError('Почта введена некоректно')
            console.log('Ошибка в Почте')
            emailInput.className = classes.textBoxError;
        }
        else {
            setEmailError('')
            console.log('Ошибка в Почте нет')
            emailInput.className = classes.textBox;
        }
    }
    const passwordHandler=(e)=>{
        const passwordInput = document.querySelector('#Password')
        setPassword(e.target.value)
        const regex =/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,20})/;
        if(!regex.test(e.target.value))
        {
            setPasswordError('Пароль должен содержать от 8 до 20 символов и содержать по меньшей мере:1 цифру, 1 спец символ, 1 строчную букву')
            console.log('Ошибка в пароле')
            passwordInput.className = classes.textBoxError;
        }
        else {
            setPasswordError('')
            console.log('Ошибка в пароле нет')
            passwordInput.className = classes.textBox;
        }
    }
    const passwordCopyHandler=(e)=>{
        const copyPasswordInput = document.querySelector('#PasswordCopy')
        setCopyPassword(e.target.value)
        if(Password !== e.target.value)
        {
            setCopyPasswordError('Пароли не одинаковые')
            console.log('Ошибка в повторении пароля')
            copyPasswordInput.className = classes.textBoxError;
        }
        else{
            setCopyPasswordError('')
            console.log('Ошибка в повторении пароля нет')
            copyPasswordInput.className = classes.textBox;
        }
    }
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'inn':
                setINNNull(true)
                break
            case 'login':
                setUserNameNull(true)
                break
            case 'hotel':
                setHotelNameNull(true)
                break
            case 'email':
                setEmailNull(true)
                break
            case 'password':
                setPasswordNull(true)
                break
            case 'copyPassword':
                setCopyPasswordNull(true)
                break
            default:
        }
    }

    const createAccount= async (e) => {
        const inn = document.querySelector('#INN').value;
        const login = document.querySelector('#Login').value;
        const email = document.querySelector('#Email').value;
        const hotel = document.querySelector('#Hotel').value;
        const password = document.querySelector('#Password').value;
        console.log(inn, hotel, email, password, login)
        try{
            const res = await Axios.post('api/authentication/registrationCompanyy', {
                INN,
                HotelName,
                Email,
                Password,
                UserName,
                "roles": [
                    "Companyy"
                ]
            })
            console.log(res)
            window.location.href = '/';
        }
        catch {
            alert("что-то пошло не так")
        }
    }


    return (
        <div className={classes.Window}>
            <div className={classes.ContentBg}>
                <div className={classes.Content}>
                    <div className={classes.Container}>
                        <div className={classes.Inputs}>
                            <img className={classes.RegImg} src={reg} alt={'Картинка'}/>
                            <p className={classes.p}>Регистрация</p>
                            <div className={classes.inputBox}>                               
                                <input onChange={e => INNHandler(e)} onBlur={e => blurHandler(e)} value={INN} id={'INN'} className={classes.textBox} type={'text'} placeholder={'Введите ИНН Вашего отеля'} name={'inn'}  maxLength={12}/>
                                {(INNNull && INNError) && <div className={classes.errorMessage}>{INNError}</div> }
                            </div>
                            <div className={classes.inputBox}>
                                <input onChange={e => loginHandler(e)} onBlur={e => blurHandler(e)} value={UserName} id={'Login'} className={classes.textBox} type={'text'} placeholder={'Введите Ваше имя'} name={'login'}/>
                                {(UserNameNull && UserNameError) && <div className={classes.errorMessage}>{UserNameError}</div>}
                            </div>
                            <div className={classes.inputBox}>
                                <input onChange={e => hotelHandler(e)} onBlur={e => blurHandler(e)} value={HotelName} id={'Hotel'} className={classes.textBox} type={'text'} placeholder={'Введите название Вашего отеля'} name={'hotel'}/>
                                {(HotelNameNull && HotelNameError) && <div className={classes.errorMessage}>{HotelNameError}</div>}
                            </div>
                            <div className={classes.inputBox}>
                                <input onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} value={Email} id={'Email'} className={classes.textBox} type={'text'} placeholder={'Введите Вашу почту'} name={'email'}/>
                                {(EmailNull && EmailError) && <div className={classes.errorMessage}>{EmailError}</div>}
                            </div>
                            <div className={classes.inputBox}>
                                <img alt={'Картинка'} src={lock} className={classes.lockImg}/>
                                <input onChange={e => passwordHandler(e)} onBlur={e => blurHandler(e)} value={Password} id={'Password'} className={classes.textBox} type={'password'} placeholder={'Введите пароль'} name={'password'}/>
                                <button id={'pass1_img'} className={classes.passwordImg} onClick={passwordCheck}/>
                                {(PasswordNull && PasswordError) && <div className={classes.errorMessage}>{PasswordError}</div>}
                            </div>
                            <div className={classes.inputBox}>
                                 <img alt={'Картинка'} src={lock} className={classes.lockImg}/>
                                 <input onChange={e => passwordCopyHandler(e)} onBlur={e => blurHandler(e)} value={CopyPassword} id={'PasswordCopy'} className={classes.textBox} type={'password'} placeholder={'Повторите пароль'} name={'copyPassword'}/>
                                 <button id={'pass2_img'} className={classes.passwordImg} onClick={passwordCheck}/>
                                 {(CopyPasswordNull && CopyPasswordError) && <div className={classes.errorMessage}>{CopyPasswordError}</div>}
                            </div>
                            <button id={'sinInButton'} onClick={e => createAccount(e)} disabled={!formValid} className={classes.BadSignIn}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
                            <div className={classes.Text}>
                                У вас уже есть аккаунт? <Link to={"/autorization"} className={classes.Link}>Войти</Link>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    );
}

export default Registration;