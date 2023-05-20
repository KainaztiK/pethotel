import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuth } from "../../redux/slices/authSlice";
import TextField from "@mui/material/TextField";
import "./Edit.scss";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchAuth } from "../../redux/actions/auth";
import styles from "./Edit.module.scss";
function Edit() {

    const router = useNavigate()
    const isUserAuth = useSelector(isAuth);
    useEffect(()=>{
        if(window.localStorage.getItem("role")==="User")
        {
            router("/edit-user");
        }
        if(window.localStorage.getItem("role")==="Companyy")
        {
            router("/posts");
        }
        if(!window.localStorage.getItem("token"))
        {
            router("/");
        }
    }, [router, isUserAuth])
    const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      password: "",
      repeatpassword: "",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data  = await dispatch(fetchAuth(values));

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
                                    <h5>Изменить пароль</h5>
                                </div>
                                <div>
                                <form className={styles.rootcolor} classes={{ root: styles.root }} onSubmit={handleSubmit(onSubmit)}>
                                    <TextField
                                    className={styles.field}
                                    label="Старый пароль"
                                    error={Boolean(errors.email?.message)}
                                    helperText={errors.email?.message}
                                    fullWidth
                                    {...register("email", { required: "Укажите пароль" })}
                                    type="password"
                                    />
                                    <TextField
                                    className={styles.field}
                                    label="Новый пароль"
                                    type="password"
                                    error={Boolean(errors.password?.message)}
                                    helperText={errors.password?.message}
                                    fullWidth
                                    {...register("repeatpassword", { required: "Укажите пароль" })}
                                    />
                                    <div className="rootedit">
                                        <Link to="/hotels"><button disabled={!isValid} className="butsave" type="submit" size="large" variant="contained" fullWidth>Сохранить</button></Link>
                                    </div>
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