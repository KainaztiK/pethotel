import React, {Component} from 'react';
import {Link} from "react-router-dom";
import MyImage from "../Components/img/logo.svg";

class Header extends Component {
    render() {
        return (
            <div>
                <header className="headerwrapp clear">
                    <Link to="/">
                        <div className="headerLeft">
                            <img width={50} height={50} src={MyImage} className="logo mt-5" alt="logotip"/>
                            <div className="mt-5 logotxt">
                                <h3 className="mr-5">Pet</h3>
                                <h3 className="">Hotel</h3>
                            </div>
                        </div>
                    </Link>
                </header>
            </div>
        );
    }
}

export default Header;