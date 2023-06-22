import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Edit.scss";
import { useForm } from "react-hook-form";
import styles from "./Edit.module.scss";
import Axios from "../../API/api";
function EditName() {
    const [userInfo, setUserInfo] = useState('');
    const router = useNavigate()
    const isUserAuth = useSelector(isAuth);
    useEffect(()=>{
        if(window.localStorage.getItem("role")==="User")
        {
            router("/edit-name");
        }
        if(window.localStorage.getItem("role")==="Companyy")
        {
            router("/edit-name");
        }
        if(!window.localStorage.getItem("token"))
        {
            router("/");
        }
        fetchUserInfo();
    }, [router, isUserAuth])

    const fetchUserInfo = async () => {
        const response = await Axios.get('api/authentication/CheckAuthorization');
        setUserInfo(response.data);
    };
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
        userName: "",
    },
    mode: "onChange",
  });
  
  const onSubmit = async (values) => {
    const data  = await Axios.put(`/api/authentication/ChangeUserName/${userInfo.id}?userName=${values.userName}`);

    if (`error` in data) {
      return alert(data.payload);
    }
  };

    return(
        <>
            <div>
                <div className="containeredit">
                    <div className="formedit">
                        <div className="leftblock">
                            <button className="backbtn" onClick={() => router(-2)}></button>
                        </div>
                        <div className="rightblock">
                            <div>
                                <div className="textedit">
                                    <h5>Редактировать профиль</h5>
                                </div>
                                <div>
                                <form className={styles.rootcolor} classes={{ root: styles.root }} onSubmit={handleSubmit(onSubmit)}>
                                    <TextField
                                    className={styles.field}
                                    label="Новое имя"
                                    error={Boolean(errors.userName?.message)}
                                    helperText={errors.userName?.message}
                                    fullWidth
                                    {...register("userName", { required: "Укажите новое имя" })}
                                    type="userName"
                                    />
                                    <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
                                        Сохранить
                                    </Button>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default EditName;