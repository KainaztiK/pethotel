import React, {useEffect, useState} from 'react';
import classes from "./AddPost.module.css"
import axios from "axios";


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
    const[HotelNameNull, setHotelNameNull]=useState(false)
    const[CityNull, setCityNull]=useState(false)
    const[AddressNull, setAddressNull]=useState(false)
    const[NumberNull, setNumberNull]=useState(false)
    const[DescriptionNull, setDescriptionNull]=useState(false)
    const[HotelNameError, setHotelNameError]=useState('Название не может быть пустым!')
    const[CityError, setCityError]=useState('Город не может быть пустым!')
    const[AddressError, setAddressError]=useState('Адрес не может быть пустой!')
    const[NumberError, setNumberError]=useState('Номер не может быть пустым!')
    const[DescriptionError, setDescriptionError]=useState('Описание не может быть пустым!')
    const [formValid, setFormValid] = useState(false)
    useEffect(()=>{
            if(HotelNameError || CityError || AddressError || NumberError || DescriptionError){
                setFormValid(false)
            }
            else{
                setFormValid(true)
            }
        }, [HotelNameError, CityError, AddressError, NumberError, DescriptionError]
    )

    const HotelNameHandler = (e) => {
        const hotelName = document.querySelector('#HotelName')
        setHotelName(e.target.value)
        if(e.target.value.length < 5 || e.target.value.length >60){
            setHotelNameError('Длина Название - не более 60')
            console.log('Ошибка в названии')
            hotelName.className = classes.textBoxError;
        }
        else{
            setHotelNameError('')
            console.log('Ошибки нет')
            hotelName.className = classes.textBox;
        }
    }
    const CityHandler = (e) => {
        const city = document.querySelector('#City')
        setCity(e.target.value)
        if(e.target.value.length < 5 || e.target.value.length >60){
            setCityError('Длина названия города - не более 60')
            console.log('Ошибка в городе')
            city.className = classes.textBoxError;
        }
        else{
            setCityError('')
            console.log('Ошибки нет')
            city.className = classes.textBox;
        }
    }
    const AddressHandler = (e) => {
        const address = document.querySelector('#Address')
        setAddress(e.target.value)
        if(e.target.value.length < 5 || e.target.value.length >60){
            setAddressError('Длина адреса - не более 60')
            console.log('Ошибка в адресе')
            address.className = classes.textBoxError;
        }
        else{
            setAddressError('')
            console.log('Ошибки нет')
            address.className = classes.textBox;
        }
    }
    const NumberHandler = (e) => {
        const number = document.querySelector('#Number')
        setNumber(e.target.value)
        const regex = /((?=.*\d).{11})/;
        if(!regex.test(e.target.value)){
            setNumberError('Неверно указан номер')
            console.log('Ошибка в номере')
            number.className = classes.textBoxError;
        }
        else{
            setNumberError('')
            console.log('Ошибки нет')
            number.className = classes.textBox;
        }
    }
    const DescriptionHandler = (e) => {
        const description = document.querySelector('#Description')
        setDescription(e.target.value)
        if(e.target.value.length < 5 || e.target.value.length >60){
            setDescriptionError('Длина описания - не более 60')
            console.log('Ошибка в описании')
            description.className = classes.textBoxError;
        }
        else{
            setDescriptionError('')
            console.log('Ошибки нет')
            description.className = classes.DescriptionBox;
        }
    }
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'hotel':
                setHotelNameNull(true)
                break
            case 'city':
                setCityNull(true)
                break
            case 'address':
                setAddressNull(true)
                break
            case 'number':
                setNumberNull(true)
                break
            case 'description':
                setDescriptionNull(true)
                break
            default:
        }
    }
    const catsHandler=()=>{
        if(cats === false) {
            cats = true;
            setCat(true);
            console.log(cats);
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
            const res = await axios.post('https://localhost:5001/api/hotels/advertisements', {
                name:HotelName,
                city:City,
                address:Address,
                description:Description,
                number:Number,
                cat:Cat,
                dog:Dog,
                rodent:Rodent,
                other:Other
            })
            console.log(res)
            window.location.href = '/posts';
        }
        catch {
            alert("что-то пошло не так")
        }
    }

    return (
        <div className={classes.Window}>
            <div className={classes.ContentBg}>
                <div className={classes.Content}>
                    <div className={classes.Container}>
                        <div className={classes.Form}>
                            <p className={classes.p}>Добавление объявления</p>
                            <div className={classes.FormInputs}>
                                <div className={classes.inputBox}>
                                    {(HotelNameNull && HotelNameError) && <div className={classes.errorMessage}>{HotelNameError}</div> }
                                    <input className={classes.textBox} id={'HotelName'} type={'text'} placeholder={'Введите название отеля'} name={'hotel'}
                                           onChange={e => HotelNameHandler(e)} onBlur={e => blurHandler(e)} value={HotelName}/>
                                </div>
                                <div className={classes.inputBox}>
                                    {(CityNull && CityError) && <div className={classes.errorMessage}>{CityError}</div> }
                                    <input className={classes.textBox} id={'City'} type={'text'} placeholder={'Укажите город'} name={'city'}
                                           onChange={e => CityHandler(e)} onBlur={e => blurHandler(e)} value={City}/>
                                </div>
                                <div className={classes.inputBox}>
                                    {(AddressNull && AddressError) && <div className={classes.errorMessage}>{AddressError}</div> }
                                    <input className={classes.textBox} id={'Address'} type={'text'} placeholder={'Укажите адрес'} name={'address'}
                                           onChange={e => AddressHandler(e)} onBlur={e => blurHandler(e)} value={Address}/>
                                </div>
                                <div className={classes.inputBox}>
                                    {(NumberNull && NumberError) && <div className={classes.errorMessage}>{NumberError}</div>}
                                    <input className={classes.textBox} id={'Number'} type={'text'} placeholder={'Укажите номер для связи'} name={'number'}
                                           onChange={e => NumberHandler(e)} onBlur={e => blurHandler(e)} value={Number} maxLength={11}/>
                                </div>
                                <div className={classes.inputBox}>
                                    {(DescriptionNull && DescriptionError) && <div className={classes.errorMessage}>{DescriptionError}</div>}
                                    <textarea className={classes.DescriptionBox} id={'Description'} placeholder={'Введите описание отеля'} name={'description'}
                                    onChange={e => DescriptionHandler(e)} onBlur={e => blurHandler(e)} value={Description}/>
                                </div>
                                <div className={classes.checkBoxBlock}>
                                    <p className={classes.checkBoxPlace} onChange={e => catsHandler(e)}><input className={classes.CheckBox} type={'checkbox'} id={'cats'} />Кошки</p>
                                    <p className={classes.checkBoxPlace} onChange={e => dogsHandler(e)}><input className={classes.CheckBox} type={'checkbox'} id={'dogs'} />Собаки</p>
                                    <p className={classes.checkBoxPlace} onChange={e => ratsHandler(e)}><input className={classes.CheckBox} type={'checkbox'} id={'rats'} />Грызуны</p>
                                    <p className={classes.checkBoxPlace} onChange={e => otherHandler(e)}><input className={classes.CheckBox} type={'checkbox'} id={'other'} />Другое</p>
                                </div>
                                <button onClick={e => createPost(e)} disabled={!formValid} className={classes.CreatePostButton}>Создать объявление</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Posts;