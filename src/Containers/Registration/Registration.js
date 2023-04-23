import React, {Component} from 'react';
import Registr from "../Functions/Register";
import imgvanna from "../Registration/img/vanna.svg";
import '../Common.scss';

class Registration extends Component {
    render() {
        return (
            <div>

                <div className="bodyrega">
                    <div className="mainrega">
                        <img src={imgvanna} className="cssvanna" alt="ImageVanna"/>
                        <h2 className="regatxt">Регистрация</h2>
                        <Registr/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Registration;