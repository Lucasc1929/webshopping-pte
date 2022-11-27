import React, { useState } from "react";
import "../../Styles/Auth/login.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";


const REACT_APP_BACKENDAPI = process.env.REACT_APP_BACKENDAPI;

function Signup() {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    // A propriedade tem que a ser mesma do name no input
    name: yup
      .string()
      .min(3, "O nome deve ter no mínimo 3 caractéres")
      .required("Este campo é obrigatório"),
    email: yup
      .string()
      .email("Email não válido")
      .min(4, "O email deve ter no mínimo 4 caractéres")
      .required("O campo é obrigatório"),
    password: yup
      .string()
      .min(5, "A senha deve ter no mínimo 5 caractéres")
      .required("O campo é obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não combinam ")
      .required("O campo é obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = async (data) => {
    const { name, email, password } = data;

    let result;
    try {
      result = await fetch(REACT_APP_BACKENDAPI + "/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, email: email, password: password }),
      });
    } catch (err) {
    }
    result = await result.json();
    alert(result.message);
    navigate("/login");
  };

  const errorForm = (err) => {
  };

  return (
    <>
      <h1 className='Webpage__title'>Registrar</h1>
      <div className='auth-login__form'>
        <form
          onSubmit={handleSubmit(submitForm, errorForm)}
          className='AuthForm'>
          <input type='text' placeholder='Nome' {...register("name")} />
          <p className='errorMessage'>{errors.name?.message}</p>

          <input type='text' placeholder='Email' {...register("email")} />
          <p className='errorMessage'>{errors.email?.message}</p>

          <input
            type='password'
            placeholder='Senha'
            {...register("password")}
          />
          <p className='errorMessage'>{errors.password?.message}</p>

          <input
            type='password'
            placeholder='Confirmar a senha'
            {...register("confirmPassword")}
          />
          <p className='errorMessage'>{errors.confirmPassword?.message}</p>

          <a className='authAddress' onClick={() => navigate("/login")}>
            Já tem uma conta?
          </a>

          <input type='submit' className='submit-login__button' />
        </form>
      </div>
    </>
  );
}

export default Signup;
