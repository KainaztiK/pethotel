import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Edit.scss";
import { useForm } from "react-hook-form";
import styles from "./Edit.module.scss";
import Axios from "../../API/api";
function EditEmail() {
    const [userInfo, setUserInfo] = useState('');
    const router = useNavigate()
    const isUserAuth = useSelector(isAuth);
    useEffect(()=>{
        if(window.localStorage.getItem("role")==="User")
        {
            router("/edit-email");
        }
        if(window.localStorage.getItem("role")==="Companyy")
        {
            router("/posts");
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
      email: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data  = await Axios.put(`/api/authentication/ChangeEmail/${userInfo.id}?email=${values.email}`);

    if (`error` in data) {
      return alert(data.payload);
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token);
      window.localStorage.setItem('role', data.payload.role);
      window.location.href="/hotels"
    }
  };

    return(
        <>
            <div>
                <div className="containeredit">
                    <div className="formedit">
                        <div className="leftblock">
                            <Link to={"/hotels"}><button className="backbtn"></button></Link>
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
                                    label="Новая почта"
                                    error={Boolean(errors.email?.message)}
                                    helperText={errors.email?.message}
                                    fullWidth
                                    {...register("email", { required: "Укажите почту" })}
                                    type="email"
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
export default EditEmail;