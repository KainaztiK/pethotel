import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Login.module.scss";
import { useForm} from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../../redux/actions/auth";

export const Registration = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      "roles": [
        "User"
      ],
    },
    mode: "onChange",
  });

  const onSubmit = async (values) => {
    
    const data = await dispatch(fetchRegister(values));

    if (`error` in data) {
      return alert(data.payload);
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };
  return (
    <form className={styles.rootcolor1} classes={{ root: styles.root }} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        className={styles.field}
        error={Boolean(errors.username?.message)}
        helperText={errors.username?.message}
        {...register("username", { required: "Укажите полное имя" })}
        label="Полное имя"
        fullWidth
      />
      <TextField
        className={styles.field}
        error={Boolean(errors.email?.message)}
        helperText={errors.email?.message}
        {...register("email", { required: "Укажите почту"})}
        label="E-Mail"
        fullWidth
      />
      <TextField
        className={styles.field}
        error={Boolean(errors.password?.message)}
        helperText={errors.password?.message}
        {...register("password", { required: "Укажите пароль" })}
        label="Пароль"
        type="password"
        fullWidth
      />
      <Button
        type="submit"
        disabled={!isValid}
        size="large"
        variant="contained"
        fullWidth
      >
        Зарегистрироваться
      </Button>
    </form>
  );
};
