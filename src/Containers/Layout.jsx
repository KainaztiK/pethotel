import React, {useState, useEffect, useRef} from "react";
import { Outlet, NavLink } from 'react-router-dom';
import "./Layout.scss";
import MyImage from "./MainWin/img/logo.svg";
import ipethotel from "./Registration/img/ic_pet_hotel_1.svg";
import telegram from "./Registration/img/telegram.svg";
import vk from "./Registration/img/vk.svg";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
// import { AiFillHeart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import Axios from "../API/api";

const Layout = () => {
    const dispatch = useDispatch();
    const onClickLogout = () => {
        if (window.confirm("Вы действительно хотите выйти?")) {
            dispatch(logout());
            window.localStorage.removeItem("token");
            window.localStorage.removeItem("role");
            setOpen(false);
            window.location.href="/"
        }
    };
    const [open, setOpen] = useState(false);

    let menuRef = useRef();
    
    const [userInfo, setUserInfo] = useState('');
    
    useEffect(() => {
        
        let handler = (e)=>{
        if(menuRef.current && !menuRef.current.contains(e.target)){
            setOpen(false);
        }};
            document.addEventListener("mousedown", handler)
        return() =>{
            document.removeEventListener("mousedown", handler);
        }
    });
    useEffect(() => {
        const role = window.localStorage.getItem("role");
        const token = window.localStorage.getItem("token");
        if (role && token) {
            fetchUserInfo();
        }
    }, []);
    const fetchUserInfo = async () => {
        const response = await Axios.get('api/authentication/CheckAuthorization');
        setUserInfo(response.data);
    };
    
    
    
    
    
    return (
        <>
            <header>
            {(window.localStorage.getItem("role")==="User") || (window.localStorage.getItem("role")==="Companyy")
            ? ( 
                (window.localStorage.getItem("role")==="User")
                ?(
                    <>
                        <div className="headerblock">
                            <div className="headerleftblock clear">
                                <NavLink to="/hotels">
                                    <div className="headerLeft">
                                        <img width={50} height={50} src={MyImage} className="logo mt-5" alt="logotip"/>
                                        <div className="logotxt">
                                            <h4 className="">Pet</h4>
                                            <h4 className="">Hotel</h4>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="buttons">
                                <NavLink to="search">
                                <button onClick={()=>{setOpen(false)}} className="authbutton" aria-label="Поиск">
                                    <AiOutlineSearch size={'2rem'}/>
                                    Поиск
                                </button>
                                </NavLink>
                                {/* <NavLink to="/">
                                        <button className="authbutton" aria-label="Избранное">
                                        <AiFillHeart size={'2rem'}/>
                                        Избранное
                                        </button>
                                    </NavLink> */}
                                <button onClick={()=>{setOpen(!open)}} className="authbutton" aria-label="Аккаунт">
                                    <AiOutlineUser size={'2rem'}/>
                                    <span>
                                        Аккаунт
                                    </span>
                                </button>
                                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                                    <ul>
                                        <li className = 'dropdownItem'>
                                            <h5>{userInfo.userName}</h5>
                                        </li>
                                        <li className = 'dropdownItem'>
                                            <h5>{userInfo.email}</h5>
                                        </li>
                                        <NavLink to="/">
                                            <li className = 'dropdownItem'>
                                                <h5>Редактировать профиль</h5>
                                            </li>
                                        </NavLink>
                                        <NavLink to="/edit-user">
                                            <li className = 'dropdownItem'>
                                                <h5>Изменить пароль</h5>
                                            </li>
                                        </NavLink>
                                        <li className = 'dropdownItem' onClick={onClickLogout}>
                                            <h5>Выйти</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                )
                : (
                    <>
                        <div className="headerblock">
                            <div className="headerleftblock clear">
                                <NavLink to="/hotels">
                                    <div className="headerLeft">
                                        <img width={50} height={50} src={MyImage} className="logo mt-5" alt="logotip"/>
                                        <div className="logotxt">
                                            <h4 className="">Pet</h4>
                                            <h4 className="">Hotel</h4>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="buttons">
                                <NavLink to="search">
                                <button onClick={()=>{setOpen(false)}} className="authbutton" aria-label="Поиск">
                                    <AiOutlineSearch size={'2rem'}/>
                                    Поиск
                                </button>
                                </NavLink>
                                {/* <NavLink to="/">
                                        <button className="authbutton" aria-label="Избранное">
                                        <AiFillHeart size={'2rem'}/>
                                        Избранное
                                        </button>
                                    </NavLink> */}
                                <button onClick={()=>{setOpen(!open)}} className="authbutton" aria-label="Аккаунт">
                                    <AiOutlineUser size={'2rem'}/>
                                    <span>
                                        Аккаунт
                                    </span>
                                </button>
                                <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
                                    <ul>
                                        <li className = 'dropdownItem'>
                                            <h5>{userInfo.userName}</h5>
                                        </li>
                                        <li className = 'dropdownItem'>
                                            <h5>{userInfo.email}</h5>
                                        </li>
                                        <NavLink to="/posts">
                                            <li className = 'dropdownItem'>
                                                <h5>Выши посты</h5>
                                            </li>
                                        </NavLink>
                                        <NavLink to="/hotels">
                                            <li className = 'dropdownItem'>
                                                <h5>Объявления</h5>
                                            </li>
                                        </NavLink>
                                        <NavLink to="/edit-company">
                                            <li className = 'dropdownItem'>
                                                <h5>Профиль</h5>
                                            </li>
                                        </NavLink>
                                        <li className = 'dropdownItem' onClick={onClickLogout}>
                                            <h5>Выйти</h5>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
                ) )
            : (<>
                <div className="headerblock">
                    <div className="headerleftblock clear">
                        <NavLink to="/">
                            <div className="headerLeft">
                                <img width={50} height={50} src={MyImage} className="logo mt-5" alt="logotip"/>
                                <div className="logotxt">
                                    <h4 className="">Pet</h4>
                                    <h4 className="">Hotel</h4>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="buttons">
                            <NavLink to="autorization">
                                <button className="btnhead" aria-label="Войти">
                                    Войти
                                </button>
                            </NavLink>
                            <NavLink to="methodregistration">
                                <button className="btnhead" aria-label="Зарегистрироваться">
                                        Зарегистрироваться
                                </button>
                            </NavLink>
                    </div>
                </div>
            </>)}         
            </header>
            

            <main className="container" onClick={()=>{setOpen(false)}}>
                <Outlet />
            </main>

            <footer>
                <div className="footerall d-flex justify-center clear">
                    <img src={ipethotel} className="iPetHotel" alt="IconPetHotel"/>
                    <div className="contentftr">
                        <div className="footercontent text-center align-center">
                            <p>Контакты</p>
                            <p>+7 (xxx)xxx-xx-xx</p>
                            <p>+7 (xxx)xxx-xx-xx</p>
                        </div>
                        <div className="footercontent1">
                            <p>
                                @2022-2023 PetHotel.ru Все права защищены
                            </p>
                        </div>
                    </div>
                    <ul className="footerright">
                        <li>
                            <h4 className="footercontent2">
                                Мы в соцсетях
                            </h4>
                        </li>
                        <li className="footercontent2">
                            <img src={telegram} className="iTelegram" alt="IconTelegram"/>
                            <img src={vk} className="iVK" alt="IconVK"/>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export {Layout}