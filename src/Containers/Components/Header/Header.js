import React from "react";
import classes from "./Header.module.css"
import Logo from "./image/logo.svg"

const Header=(props)=>{
    return(
        <div className={classes.headerbg}>
        <div className={classes.header}>
            <img className={classes.logo} src={Logo} alt={"лого"}></img>
            <div className={classes.text}>Pet Hotel</div>
            <div className={classes.headerContent}>
                {props.children}
            </div>
        </div>
        </div>
    )

}
export default Header