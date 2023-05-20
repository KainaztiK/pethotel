import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Login.module.scss";

import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { fetchAuth } from "../../redux/actions/auth";

export const Login = () => {
  const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "github@rambler.com",
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
      window.localStorage.setItem('token', 'Bearer ' + data.payload.token);
      window.localStorage.setItem('role', data.payload.role);
      window.location.href="/hotels"
    }
  };


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
