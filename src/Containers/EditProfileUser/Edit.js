import React, { useState } from "react";
import { Link, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";

import "./Edit.scss";

function Edit() {
    const [username, setUsername] = useState();
    const [usernameDirty, setUsernameDirty] = useState(false);
    const [usernameError, setUsernameError] = useState('Имя не должно быть пустым');
    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email не должен быть пустым');
    
    const usernameHandler = (e) => {
        setUsername(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 30) {
            setUsernameError('Имя пользователя должно быть больше 3 символов');
            if (e.target.value) {
                setUsernameError('Имя пользователя должно быть больше 3 символов');
            }
            else{
                setUsernameError('Имя пользователя не должно быть пустым')
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

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'username':
                setUsernameDirty(true)
                break
            case 'email':
                setEmailDirty(true)
                break
            default:
        }
    }

    const isUserAuth = useSelector(isAuth);
    if (!window.localStorage.getItem("token") && !isUserAuth) {
        return <Navigate to={"/"} />;
    }

    return(
        <>
            <div>
                <div className="containeredit">
                    <div className="formedit">
                        <div className="leftblock">
                            <Link to={"/hotels"}><button className="backbtn"></button></Link>
                        </div>
                        <div className="rightblock">
                            <div>
                                <div className="textedit">
                                    <h5>Редактировать профиль</h5>
                                </div>
                                {(usernameDirty && usernameError) && <div className="ErrorsEdit">{usernameError}</div> }
                                <div className="padinput">
                                    <input onChange={e => usernameHandler(e)} value={username} onBlur={e => blurHandler(e)} className="text-field__inputedit" type="username" name="username" id="username"
                                        placeholder="Введите ваше имя"/>
                                </div>
                                {(emailDirty && emailError) && <div className="ErrorsEdit">{emailError}</div> }
                                <div className="padinput">
                                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} className="text-field__inputedit" type="email" name="email" id="email"
                       placeholder="Введите вашу почту"/>
                                </div>
                                <Link to="/hotels"><button className="butsave" name="savebutton">Сохранить</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Edit;