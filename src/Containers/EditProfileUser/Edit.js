import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Edit.scss";
import { useForm } from "react-hook-form";
import Axios from "../../API/api";
import styles from "./Edit.module.scss";
function Edit() {
    const router = useNavigate()
    const isUserAuth = useSelector(isAuth);
    const [userInfo, setUserInfo] = useState({});
    const fetchUserInfo = async () => {
        const response = await Axios.get('api/authentication/CheckAuthorization');
        setUserInfo(response.data);
    }; 
    useEffect(()=>{
        if(window.localStorage.getItem("role")==="User")
        {
            router("/edit-user");
        }
        if(window.localStorage.getItem("role")==="Companyy")
        {
            router("/edit-user");
        }
        if(!window.localStorage.getItem("token"))
        {
            router("/");
        }
        fetchUserInfo();
    }, [router, isUserAuth])
    
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      currentPassword: "",
      newPassword: ""
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data  = await Axios.post('api/authentication/ChangePassword', {email: userInfo.email, currentPassword: values.currentPassword, newPassword: values.newPassword});

    if (`error` in data ) {
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
                                    <h5>Изменить пароль</h5>
                                </div>
                                <div>
                                <form className={styles.rootcolor} classes={{ root: styles.root }} onSubmit={handleSubmit(onSubmit)}>
                                    <TextField
                                    className={styles.field}
                                    label="Старый пароль"
                                    error={Boolean(errors.currentPassword?.message)}
                                    helperText={errors.currentPassword?.message}
                                    fullWidth
                                    {...register("currentPassword", { required: "Укажите старый пароль" })}
                                    type="password"
                                    />
                                    <TextField
                                    className={styles.field}
                                    label="Новый пароль"
                                    type="password"
                                    error={Boolean(errors.newPassword?.message)}
                                    helperText={errors.newPassword?.message}
                                    fullWidth
                                    {...register("newPassword", { required: "Укажите новый пароль" })}
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
export default Edit;