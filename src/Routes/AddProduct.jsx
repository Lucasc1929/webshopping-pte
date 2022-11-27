import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "../Styles/ModifyProducts.css";
const REACT_APP_BACKENDAPI = process.env.REACT_APP_BACKENDAPI;

function AddProduct() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Este campo é obrigatório"),
    price: yup.number().required("Este campo é obrigatório"),
    image: yup.string().required("Este campo é obrigatório"),
    description: yup
      .string()
      .min(10, "Mínimo de 10 caractéres")
      .required("Este campo é obrigatório"),
  });

  async function submitProduct(data) {
    const { image, name, price, description } = data;

    let result;
    try {
      result = await fetch(REACT_APP_BACKENDAPI + "/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          price: price,
          image_url: image,
          description: description,
        }),
      });
      navigate("/webshopping-pte");
    } catch (err) {
    }
    result = await result.json();
    alert(result);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  return (
    <>
      <form onSubmit={handleSubmit(submitProduct)} className='ProductForm'>
        <input
          type='text'
          placeholder='Nome'
          {...register("name")}
        />
        <p className='errorMessage'>{errors.name?.message}</p>
        <input
          type='text'
          placeholder='Preço'
          {...register("price")}
        />
        <p className='errorMessage'>{errors.price?.message}</p>
        <input
          type='text'
          placeholder='Imagem'
          {...register("image")}
        />
        <p className='errorMessage'>{errors.image?.message}</p>
        <input
          type='text'
          placeholder='Descrição'
          {...register("description")}
        />
        <p className='errorMessage'>{errors.description?.message}</p>
        <button type='submit' className='submit__Button'>
          Enviar
        </button>
      </form>
      <br />
    </>
  );
}

export default AddProduct;
