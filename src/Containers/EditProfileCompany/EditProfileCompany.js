import classes from "./EditProfileCompany.module.css";
import React, {useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";
import Axios from "../../API/api"
import MapBlock from "../Components/Maps/Maps";
import alert_Img from "../../images/alert.png";

function EditProfileCompany() {
    const [userInfo, setUserInfo] = useState('');
    const [modalActive1, setModalActivw1] = useState(false);
    const [modalActive2, setModalActivw2] = useState(false);
    const [modalActive3, setModalActivw3] = useState(false);

    const[UserName, setUserName]=useState('')
    const[ValidName, setValidName] = useState('false')

    const[Email, setEmail]=useState('')
    const[ValidEmail, setValidEmail] = useState('false')

    const[OldPassword, setOldPassword]=useState('')
    const[NewPassword, setNewPassword]=useState('')
    const[ValidPassword, setValidPassword] = useState('false')
    const[OldPasswordError, setOldPasswordError]=useState('Пароль не может быть пустым!')
    const[NewPasswordError, setNewPasswordError]=useState('Повторение пароля не может быть пустым!')

    const router = useNavigate()
    const isUserAuth = useSelector(isAuth);

    useEffect(()=>{
        fetchUserInfo();
        if(window.localStorage.getItem("role")==="User")
        {
            router("/edit-user");
        }
        if(window.localStorage.getItem("role")==="Companyy")
        {
            router("/edit-company");
        }
        if(!window.localStorage.getItem("token"))
        {
            router("/");
        }
    }, [router, isUserAuth])

    useEffect(()=>{
        if(OldPasswordError || NewPasswordError)
        {
            setValidPassword(false)
            console.log(2)
            document.getElementById('buttonPassword').className = classes.InCreatePostModule;
        }
        else{
            console.log(3)
            setValidPassword(true)
            document.getElementById('buttonPassword').className = classes.CreatePostModule;
        }
    }, [OldPasswordError, NewPasswordError])

    const fetchUserInfo = async () => {
        const response = await Axios.get('api/authentication/CheckAuthorization');
        setUserInfo(response.data);
        console.log(response.data.id);
    };

    const loginHandler = (e) => {
        const alert = document.querySelector('#Nalert');
        setUserName(e.target.value)
        if(e.target.value.length < 10 || e.target.value.length >50){
            console.log('Ошибка в Логине')
            alert.className = classes.alertOn;
            document.querySelector('#buttonName').className = classes.InCreatePostModule;
            setValidName(false);
        }
        else{
            console.log('Ошибка в Логине нет')
            alert.className = classes.alertOff;
            document.querySelector('#buttonName').className = classes.CreatePostModule;
            setValidName(true);
        }
    }

    const emailHandler = (e) => {
        const alert = document.querySelector('#Ealert')
        setEmail(e.target.value)
        const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!regex.test(e.target.value)){
            console.log('Ошибка в Почте')
            alert.className = classes.alertOn;
            setValidEmail(false);
            document.querySelector('#buttonEmail').className = classes.InCreatePostModule;
        }
        else {
            console.log('Ошибка в Почте нет')
            alert.className = classes.alertOff;
            document.querySelector('#buttonEmail').className = classes.CreatePostModule;
            setValidEmail(true);
        }
    }

    const OldPasswordHandler = (e) =>{
        const alert = document.querySelector('#OPalert')
        setOldPassword(e.target.value)
        const regex =/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,20})/;
        if(!regex.test(e.target.value))
        {
            console.log('Ошибка в пароле')
            setOldPasswordError('Ошибка в пароле')
            alert.className = classes.alertOn;
        }
        else {
            setOldPasswordError('')
            console.log('Ошибка в пароле нет')
            alert.className = classes.alertOff;
        }
    }

    const passwordHandler=(e)=>{
        const alert = document.querySelector('#NPalert')
        setNewPassword(e.target.value)
        const regex =/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,20})/;
        if(!regex.test(e.target.value))
        {
            setNewPasswordError('Ошибка в пароле')
            console.log('Ошибка в пароле')
            alert.className = classes.alertOn;
        }
        else {
            setNewPasswordError('')
            console.log('Ошибка в пароле нет')
            alert.className = classes.alertOff;
        }
    }

    const saveName = () => {
        console.log(UserName)
        Axios.put(`api/authentication/ChangeUserName/${userInfo.id}?userName=${UserName}`, {headers} )
        .then(res => {
            if(res.status===204)
            {
                document.location.reload();
            }
        })
        .catch(err=>{
            console.log(err);
        });
       
    }

    const saveEmail = () => {
        Axios.put(`api/authentication/ChangeEmail/${userInfo.id}?email=${Email}`, {headers} )
        .then(res => {
            if(res.status===204)
            {
                document.location.reload();
            }
        })
        .catch(err=>{
            console.log(err);
        });
    }
    const savePassword =() => {
        Axios.post(`api/authentication/ChangePassword`, {
                email: userInfo.email,
                currentPassword: OldPassword,
                newPassword: NewPassword
            }, {headers} )
        .then(res => {
            console.log(res)
        })
        .catch(err=>{
        console.log(err);
        if(err.response.status===400)
        {
            alert('Вы ввели некорректные данные!')
        } 
        });
            
        
    }

    let token = window.localStorage.getItem('token');
    const headers= {
        'Authorization': `${token}`
    };

    return (
    <div className={classes.Window}>

        <div className={classes.ContentBg}>
            <div className={classes.Content}>
                <div className={classes.Container}>
                    <div className={classes.ContentPosts}>
                        <p className={classes.Title}>Ваш профиль</p>
                        <div className={classes.BlockForPosts}>
                            <div className={classes.Text}>
                                Имя аккаунта: <div className={classes.UserInf}>{userInfo.userName}</div>
                                <button onClick={()=> setModalActivw1(true)} className={classes.CreatePostButton}>Изменить имя</button>
                                <MapBlock setActive={setModalActivw1} active={modalActive1}>
                                    <p className={classes.ModuleTitle}>Смена имени</p>
                                    <div className={classes.inputBox}>
                                        <input value={UserName} id={'uName'} onChange={e => loginHandler(e)} className={classes.textBox} type={'text'} placeholder={'Введите новое имя'} name={'login'}/>
                                        <img src={alert_Img} className={classes.alertOff} id={'Nalert'} title="Длина имени - не более 50 и не менее 10 знаков" alt='Ошибка!'/>
                                    </div>
                                    <button disabled={!ValidName} id={'buttonName'} onClick={saveName} className={classes.InCreatePostModule}>Сохранить новое имя</button>
                                </MapBlock>
                            </div>
                            <div className={classes.Text}>
                                Электронная почта: <div className={classes.UserInf}>{userInfo.email}</div>
                                <button  onClick={()=> setModalActivw2(true)} className={classes.CreatePostButton}>Изменить почту</button>
                                <MapBlock setActive={setModalActivw2} active={modalActive2}>
                                    <p className={classes.ModuleTitle}>Смена электронной почты</p>
                                    <div className={classes.inputBox}>
                                        <input value={Email} id={'Email'} onChange={e => emailHandler(e)} className={classes.textBox} type={'text'} placeholder={'Введите новую почту'} name={'email'}/>
                                        <img src={alert_Img} className={classes.alertOff} id={'Ealert'} title="Почта введена некоректно" alt='Ошибка!'/>
                                    </div>
                                    <button disabled={!ValidEmail} id={'buttonEmail'} onClick={saveEmail} className={classes.InCreatePostModule}>Сохранить новую почту</button>
                                </MapBlock>
                            </div>
                            <div className={classes.Text}>
                                Название : <div className={classes.UserInf}>{userInfo.hotelName}</div>
                            </div>
                            <div className={classes.Text}>
                                ИНН: <div className={classes.UserInf}>{userInfo.inn}</div>
                            </div>
                            <div className={classes.Text}>
                                <button onClick={()=> setModalActivw3(true)} className={classes.CreatePostButton2}>Изменить пароль</button>
                                <MapBlock setActive={setModalActivw3} active={modalActive3}>
                                    <p className={classes.ModuleTitle}>Смена пароля</p>
                                    <div className={classes.inputBox}>
                                        <input value={OldPassword} onChange={e => OldPasswordHandler(e)} className={classes.textBox} type={'text'} placeholder={'Введите старый пароль'} name={'email'}/>
                                        <img src={alert_Img} className={classes.alertOff} id={'OPalert'} title="Почта введена некоректно" alt='Ошибка!'/>
                                    </div>
                                    <div className={classes.inputBox}>
                                        <input value={NewPassword} onChange={e => passwordHandler(e)} className={classes.textBox} type={'text'} placeholder={'Введите новый пароль'} name={'email'}/>
                                        <img src={alert_Img} className={classes.alertOff} id={'NPalert'} title="Почта введена некоректно" alt='Ошибка!'/>
                                    </div>
                                    <button disabled={!ValidPassword} id={'buttonPassword'} onClick={savePassword} className={classes.InCreatePostModule}>Сохранить новый пароль</button>
                                </MapBlock>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}
export default EditProfileCompany;