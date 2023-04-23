import React from "react";
import classes from "./Footer.module.css"
import Logo from "../../MainWin/img/ic_pet_hotel_1.svg"
import vk from "../../MainWin/img/vk.svg"
import telega from "../../MainWin/img/telegram.svg"

const Footer=()=>{
    return(
        <div className={classes.footerbg}>
        <div className={classes.footer}>
            <div className={classes.content}>
                <img className={classes.footerImg} src={Logo} alt={"Лого подвала"}></img>
                <div className={classes.footerText}>
                    Контакты
                    <br/>
                    +7 (xxx)xxx-xx-xx
                    <br/>
                    +7 (xxx)xxx-xx-xx
                    <br/>
                    <br/>
                    @2022-2023 PetHotel.ru Все права защищены
                </div>
                <div className={classes.share}>
                    <div className={classes.shareText}>Мы в соцсетях</div>
                    <img className={classes.imag} src={vk} alt={"вк"}></img>
                    <img className={classes.imag} src={telega} alt={"телега"}></img>
                </div>
            </div>
        </div></div>
    )

}
export default Footer