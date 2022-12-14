import React, {Component} from 'react';
import Header from "../Components/Header";
import '../Common.scss';
import Footer from "../Components/Footer";
import Autorizat from "../Functions/Autorize";
import {Link} from "react-router-dom";
import lapkimg from "../Authorization/img/lapkimg.svg"
class Authorization extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className="bodyenter">
                    <div className="mainenter">
                        <div className="leftblockenter">
                            <Autorizat/>
                        </div>
                        <div className="rightblockenter">
                            <div className="blocklapkimg">
                                <img className="lapkimg" src={lapkimg} alt="lapki"/>
                            </div>
                            <div className="textfieldrightblock">
                                Pet Hotel
                            </div>
                            <div className="blocklinkandroid">
                                <h5 className="h5auth d-flex">скачать для <Link to="/"><div className="d-flex justify-center align-center androidlink">Android</div></Link></h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Authorization;