import ipethotel from "../Registration/img/ic_pet_hotel_1.svg";
import telegram from "../Registration/img/telegram.svg";
import vk from "../Registration/img/vk.svg";
import React, {Component} from "react";
class Footer extends Component {
    render() {
        return (
            <footer className="footerall d-flex justify-center clear">
                <img width={114} height={114} src={ipethotel} className="iPetHotel mr-50 mt-15" alt="IconPetHotel"/>
                <div className="mr-50">
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
                        <h4 className="footercontent">
                            Мы в соцсетях
                        </h4>
                        <img width={33} height={33} src={telegram} className="iTelegram ml-15" alt="IconTelegram"/>
                        <img width={33} height={33} src={vk} className="iVK ml-10" alt="IconVK"/>
                    </li>
                </ul>
            </footer>
        );
    }
}

export default Footer;