import ipethotel from "../Registration/img/ic_pet_hotel_1.svg";
import telegram from "../Registration/img/telegram.svg";
import vk from "../Registration/img/vk.svg";
import React, {Component} from "react";
class Footer extends Component {
    render() {
        return (
            <footer className="footerall d-flex justify-center clear">
                <img src={ipethotel} className="iPetHotel" alt="IconPetHotel"/>
                <div className="mr-5">
                    <block1 className="footercontent text-center align-center">
                        <p>Контакты</p>
                        <p>+7 (xxx)xxx-xx-xx</p>
                        <p>+7 (xxx)xxx-xx-xx</p>
                    </block1>
                    <block2 className="footercontent1">
                        <p>
                            @2022-2023 PetHotel.ru Все права защищены
                        </p>
                    </block2>
                </div>
                <ul className="footerright">
                    <li>
                        <h4 className="footercontent2">
                            Мы в соцсетях
                        </h4>
                        <img src={telegram} className="iTelegram" alt="IconTelegram"/>
                        <img src={vk} className="iVK" alt="IconVK"/>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;