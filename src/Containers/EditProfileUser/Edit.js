import React from "react";
import { Link } from "react-router-dom";


import "./Edit.scss";

function Edit() {
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
                                <div className="padinput">
                                    <input 
                                        className="text-field__inputedit" type="text" name="username"
                                        id="username"
                                        placeholder="Введите новое имя"
                                    />
                                </div>
                                <div className="padinput">
                                    <input 
                                        className="text-field__inputedit" type="text" name="email"
                                        id="email"
                                        placeholder="Введите новую почту"
                                    />
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