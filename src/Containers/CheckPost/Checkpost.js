import React, {useEffect, useState} from 'react';
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import classes from "./Checkpost.module.css"

let arg = window.parameters;
function Checkpost(){
    const[Cat, setCat]=useState(false)
    const[Dog, setDog]=useState(false)
    const[Rodent, setRodent]=useState(false)
    const[Other, setOther]=useState(false)
    useEffect(()=>{
            setCat(arg.cats);
            setDog(arg.dogs);
            setRodent(arg.rodent);
            setOther(arg.other);
        },
    [])

        return (
            <div className={classes.Window}>
                <Header/>
                <div className={classes.ContentBg}>
                    <div className={classes.Content}>
                        <div className={classes.Container}>
                            <div className={classes.Inputs}>
                                <div className={classes.Title}>
                                    {arg.name}
                                </div>
                                <div className={classes.Post}>
                                    <div className={classes.Text}>
                                        {arg.description}
                                    </div>
                                    <div className={classes.Address}>
                                        Адрес: {arg.city}, {arg.address}.
                                    </div>
                                    <div className={classes.forAnimal}>
                                        {Cat && <div className={classes.animal}>Кошки</div>}
                                        {Dog && <div className={classes.animal}>Собаки</div>}
                                        {Rodent && <div className={classes.animal}>Грызуны</div>}
                                        {Other && <div className={classes.animal}>Другое</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }

export default Checkpost;