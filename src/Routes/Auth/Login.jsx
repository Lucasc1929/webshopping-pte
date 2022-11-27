import React, { useState } from "react";
import "../../Styles/Auth/login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const REACT_APP_BACKENDAPI = process.env.REACT_APP_BACKENDAPI;

function Login() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    // A propriedade tem que a ser mesma do name no input
    email: yup
      .string()
      .email("Email não válido")
      .min(4, "O email deve ter no mínimo 4 caractéres")
      .required("O campo é obrigatório"),
    password: yup
      .string()
      .min(5, "A senha deve conter no mínimo 5 caractéres")
      .required("O campo é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const submitForm = async (data) => {
    const { name, email, password } = data;
    let result;
    try {
      result = await fetch(REACT_APP_BACKENDAPI + "/auth/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email, password: password }),
      });
    } catch (err) {}
    result = await result.json();
    alert(result.message + "!");
    navigate("/webshopping-pte");
  };

  const errorForm = (err) => {
    alert("There was an error");
  };

  return (
    <>
      <h1 className='Webpage__title'>Login</h1>
      <div className='auth-login__form'>
        <form
          onSubmit={handleSubmit(submitForm, errorForm)}
          className='AuthForm'>
          <input type='text' placeholder='Email' {...register("email")} />
          <p className='errorMessage'>{errors.email?.message}</p>

          <br />

          <input
            type='password'
            placeholder='Senha'
            {...register("password")}
          />
          <p className='errorMessage'>{errors.password?.message}</p>

          <br />

          <a className='authAddress' onClick={() => navigate("/signup")}>
            Não tem uma conta?
          </a>

          <input type='submit' className='submit-login__button' />
        </form>
      </div>
    </>
  );
}

export default Login;
