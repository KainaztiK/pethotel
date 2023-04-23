import React, {Component} from 'react';
import '../Common.scss';

class MainWindow extends Component {
    render() {
        return (
            <div className="mainpic">
                <div className="maincontent">
                    <div className="mcontainer">
                        <div className="mgrp">
                        </div>
                        <div className="maintxt">
                            <p>Добро пожаловать в веб-приложение</p>
                            <p>для поиска временного дома для</p>
                            <p>вашего питомца</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default MainWindow;