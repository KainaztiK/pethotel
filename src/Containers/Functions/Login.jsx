import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Login.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

import { fetchAuth } from "../../redux/actions/auth";
import { isAuth } from "../../redux/slices/authSlice";

export const Login = () => {
  const dispatch = useDispatch();
  const isUserAuth = useSelector(isAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "falileev.sergey2003@yandex.ru",
      password: "qwerty12345",
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    const data  = await dispatch(fetchAuth(values));

    if (`error` in data) {
      return alert(data.payload);
    }

    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }
  };

  if (isUserAuth) {
    return <Navigate to={'/hotels'} />
  }

  return (
      <form className={styles.rootcolor} classes={{ root: styles.root }} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          className={styles.field}
          label="E-Mail"
          error={Boolean(errors.email?.message)}
          helperText={errors.email?.message}
          fullWidth
          {...register("email", { required: "Укажите почту" })}
          type="email"
        />
        <TextField
          className={styles.field}
          label="Пароль"
          type="password"
          error={Boolean(errors.password?.message)}
          helperText={errors.password?.message}
          fullWidth
          {...register("password", { required: "Укажите пароль" })}
        />
        <Button disabled={!isValid} type="submit" size="large" variant="contained" fullWidth>
          Войти
        </Button>
      </form>
  );
};
