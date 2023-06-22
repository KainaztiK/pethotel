import React, {useEffect, useState} from 'react';
import classes from "./AddPost.module.css"
import alert_Img from "../../../images/alert.png"
import  SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useCallback } from 'react';
import Axios from "../../../API/api";


let cats =false;
let dogs = false;
let rats = false;
let other = false;
function Posts() {

    const[HotelName, setHotelName]=useState('')
    const[City, setCity]=useState('')
    const[Address, setAddress]=useState('')
    const[Number, setNumber]=useState('')
    const[Description, setDescription]=useState('')
    const[Cat, setCat]=useState(false)
    const[Dog, setDog]=useState(false)
    const[Rodent, setRodent]=useState(false)
    const[Other, setOther]=useState(false)
    const[HotelNameError, setHotelNameError]=useState('Название не может быть пустым!')
    const[CityError, setCityError]=useState('Город не может быть пустым!')
    const[AddressError, setAddressError]=useState('Адрес не может быть пустой!')
    const[NumberError, setNumberError]=useState('Номер не может быть пустым!')
    const[DescriptionError, setDescriptionError]=useState('Описание не может быть пустым!')
    const [formValid, setFormValid] = useState(false)
    useEffect(()=>{
            if(HotelNameError || CityError || AddressError || NumberError || DescriptionError){
                setFormValid(false)
                document.getElementById('buttonAdd').className = classes.ButtonInvalid;
            }
            else{
                setFormValid(true)
                document.getElementById('buttonAdd').className = classes.CreatePostButton;
            }
        }, [HotelNameError, CityError, AddressError, NumberError, DescriptionError]
    )
    
    const HotelNameHandler = (e) => {
        const hotelName = document.querySelector('#HotelName')
        const alert = document.querySelector('#HNalert')
        setHotelName(e.target.value)
        if(e.target.value.length < 5 || e.target.value.length >60){
            setHotelNameError('Длина Название - не более 60')
            console.log('Ошибка в названии')
            hotelName.className = classes.textBoxError;
            alert.className = classes.alertOn;
        }
        else{
            setHotelNameError('')
            console.log('Ошибки нет')
            hotelName.className = classes.textBox;
            alert.className = classes.alertOff;
        }
    }
    const CityHandler = (e) => {
        const city = document.querySelector('#City')
        const alert = document.querySelector('#Cityalert')
        setCity(e.target.value)
        if(e.target.value.length < 5 || e.target.value.length >60){
            setCityError('Длина названия города - не более 60')
            console.log('Ошибка в городе')
            city.className = classes.textBoxError;
            alert.className = classes.alertOn;
        }
        else{
            setCityError('')
            console.log('Ошибки нет')
            city.className = classes.textBox;
            alert.className = classes.alertOff;
        }
    }
    const AddressHandler = (e) => {
        const address = document.querySelector('#Address')
        const alert = document.querySelector('#Addralert')
        setAddress(e.target.value)
        if(e.target.value.length < 5 || e.target.value.length >60){
            setAddressError('Длина адреса - не более 60')
            console.log('Ошибка в адресе')
            address.className = classes.textBoxError;
            alert.className = classes.alertOn;
        }
        else{
            setAddressError('')
            console.log('Ошибки нет')
            address.className = classes.textBox;
            alert.className = classes.alertOff;
        }
    }
    const NumberHandler = (e) => {
        const number = document.querySelector('#Number')
        const alert = document.querySelector('#Numbalert')
        setNumber(e.target.value)
        const regex = /((?=.*\d).{11})/;
        if(!regex.test(e.target.value)){
            setNumberError('Неверно указан номер')
            console.log('Ошибка в номере')
            number.className = classes.textBoxError;
            alert.className = classes.alertOn;
        }
        else{
            setNumberError('')
            console.log('Ошибки нет')
            number.className = classes.textBox;
            alert.className = classes.alertOff;
        }
    }

    const onChange = useCallback((Description) =>{
        const alert = document.querySelector('#Discralert')        
        setDescription(Description);
        if(!Description)
        {
            setDescriptionError('Длина описания - не более 60')
            console.log('Ошибка в описании')
            alert.className = classes.alertDiscOn;
        }
        else{
            setDescriptionError('')
            console.log('Ошибки нет')
            alert.className = classes.alertDiscOff;
        }
    }, []);


    const catsHandler=()=>{
        if(cats === false) {
            cats = true;
            setCat(true);
            console.log(cats);
            console.log(Description);
        }
        else if(cats === true) {
            cats = false;
            setCat(false);
            console.log(cats);
        }
    }
    const dogsHandler=()=>{
        if(dogs === false){
            dogs = true
            setDog(true);
            console.log(dogs);
        }
        else if(dogs === true) {
            dogs = false;
            setDog(false);
            console.log(dogs);
        }
    }
    const ratsHandler=()=>{
        if(rats === false) {
            rats = true
            setRodent(true);
            console.log(rats);
        }
        else if(rats === true) {
            rats = false;
            setRodent(false);
            console.log(rats);
        }
    }
    const otherHandler=()=>{
        if(other === false) {
            other = true
            setOther(true);
            console.log(other);
        }
        else if(other === true) {
            other = false;
            setOther(false);
            console.log(other);
        }
    }

    const createPost= async () => {
        try{
            console.log(HotelName,
                City,
                Address,
                Description,
                Number,
                Cat,
                Dog,
                Rodent,
                Other)
            //const res = await axios.post('http://185.139.69.220/api/hotels/advertisements/create-advertisement', {
                const res = await Axios.post('api/hotels/advertisements/create-advertisement', {
                name:HotelName,
                city:City,
                address:Address,
                description:Description,
                number:Number,
                cat:Cat,
                dog:Dog,
                rodent:Rodent,
                other:Other
            }, {headers} )
            console.log(res)
            window.location.href = '/posts';
        }
        catch {
            alert("что-то пошло не так")
        }
    }

    const options = React.useMemo(
        () => ({
          spellChecker: false,
          maxHeight: "400px",
          autofocus: true,
          placeholder: "Введите описание отеля",
          status: false,
          autosave: {
            enabled: true,
            delay: 1000,
            uniqueId: 1,
          },
        }),
        []
      );
      let token = window.localStorage.getItem('token');
      const headers= {
          'Authorization': `${token}`,
          'Content-Type': 'application/json'
      };
    return (
        <div className={classes.Window}>
            <div className={classes.ContentBg}>
                <div className={classes.Content}>
                    <div className={classes.Container}>
                        <div className={classes.Form}>
                            <p className={classes.p}>Добавление объявления</p>
                            <div className={classes.FormInputs}>
                                <div className={classes.inputBox}>
                                    <input className={classes.textBox} id={'HotelName'} type={'text'} placeholder={'Введите название отеля'} name={'hotel'}
                                           onChange={e => HotelNameHandler(e)}  value={HotelName}/>
                                    <img src={alert_Img} className={classes.alertOff} id={'HNalert'} title="Длина Название - не более 60" alt='Ошибка!'/>
                                </div>
                                <div className={classes.inputBox}>
                                    <input className={classes.textBox} id={'City'} type={'text'} placeholder={'Укажите город'} name={'city'}
                                           onChange={e => CityHandler(e)} value={City}/>
                                    <img src={alert_Img} className={classes.alertOff} id={'Cityalert'} title="Длина названия города - не более 60" alt='Ошибка!'/>
                                </div>
                                <div className={classes.inputBox}>
                                    <input className={classes.textBox} id={'Address'} type={'text'} placeholder={'Укажите адрес'} name={'address'}
                                           onChange={e => AddressHandler(e)} value={Address}/>
                                    <img src={alert_Img} className={classes.alertOff} id={'Addralert'} title="Длина адреса - не более 60" alt='Ошибка!'/>
                                </div>
                                <div className={classes.inputBox}>
                                    <input className={classes.textBox} id={'Number'} type={'text'} placeholder={'Укажите номер для связи'} name={'number'}
                                           onChange={e => NumberHandler(e)} value={Number} maxLength={11}/>
                                    <img src={alert_Img} className={classes.alertOff} id={'Numbalert'} title="Неверно указан номер" alt='Ошибка!'/>
                                </div>
                            </div>
                            <div className={classes.DiscriptionArea}>    
                                    <SimpleMDE className={classes.DescriptionBox} id={'Description'} name={'description'}
                                    onChange={onChange} value={Description} options={options}/>
                                    <img src={alert_Img} className={classes.alertDiscOff} id={'Discralert'} title="Описание не может быть пустым" alt='Ошибка!'/>
                                <div className={classes.checkBoxBlock}>
                                    <p className={classes.checkBoxPlace} onChange={e => catsHandler(e)}><input className={classes.CheckBox} type={'checkbox'} id={'cats'} />Кошки</p>
                                    <p className={classes.checkBoxPlace} onChange={e => dogsHandler(e)}><input className={classes.CheckBox} type={'checkbox'} id={'dogs'} />Собаки</p>
                                    <p className={classes.checkBoxPlace} onChange={e => ratsHandler(e)}><input className={classes.CheckBox} type={'checkbox'} id={'rats'} />Грызуны</p>
                                    <p className={classes.checkBoxPlace} onChange={e => otherHandler(e)}><input className={classes.CheckBox} type={'checkbox'} id={'other'} />Другое</p>
                                </div>
                                <button id={'buttonAdd'} onClick={e => createPost(e)} disabled={!formValid} className={classes.ButtonInvalid}>Сохранить объявление</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;